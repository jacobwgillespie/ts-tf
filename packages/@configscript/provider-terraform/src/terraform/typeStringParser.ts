/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import {createToken, EmbeddedActionsParser, ILexingError, Lexer, IRecognitionException} from 'chevrotain'

export type CollectionType = 'list' | 'map' | 'set'
export type SimpleType = 'any' | 'bool' | 'number' | 'string'
export type AttributeType =
  | SimpleType
  | readonly ['list', AttributeType]
  | readonly ['map', AttributeType]
  | readonly ['object', {readonly [name: string]: AttributeType}]
  | readonly ['set', AttributeType]

const WhiteSpace = createToken({name: 'WhiteSpace', pattern: /\s+/, group: Lexer.SKIPPED})

const LParen = createToken({name: 'LParen', pattern: /\(/})
const RParen = createToken({name: 'RParen', pattern: /\)/})

const LBrace = createToken({name: 'LBrace', pattern: /{/})
const RBrace = createToken({name: 'RBrace', pattern: /}/})

const Assignment = createToken({name: 'Assignment', pattern: /=/})
const Comma = createToken({name: 'Comma', pattern: /,/})

const Word = createToken({name: 'Word', pattern: Lexer.NA})
const ListTypeName = createToken({name: 'ListTypeName', pattern: /list/, categories: Word})
const MapTypeName = createToken({name: 'MapTypeName', pattern: /map/, categories: Word})
const ObjectTypeName = createToken({name: 'ObjectTypeName', pattern: /object/, categories: Word})
const SetTypeName = createToken({name: 'SetTypeName', pattern: /set/, categories: Word})
const SimpleTypeName = createToken({name: 'SimpleTypeName', pattern: /(any|bool|number|string)/, categories: Word})
const Ident = createToken({name: 'Ident', pattern: /[a-zA-Z][\w-]*/, categories: Word})

const allTokens = [
  WhiteSpace,
  LParen,
  RParen,
  LBrace,
  RBrace,
  Assignment,
  Comma,
  Word,
  ListTypeName,
  MapTypeName,
  ObjectTypeName,
  SetTypeName,
  SimpleTypeName,
  Ident,
]

const TypeLexer = new Lexer(allTokens)

class TypeParser extends EmbeddedActionsParser {
  constructor() {
    super(allTokens)
    this.performSelfAnalysis()
  }

  type = this.RULE(
    'type',
    (): AttributeType => {
      return this.OR([
        {ALT: () => this.SUBRULE(this.listType)},
        {ALT: () => this.SUBRULE(this.mapType)},
        {ALT: () => this.SUBRULE(this.objectType)},
        {ALT: () => this.SUBRULE(this.setType)},
        {ALT: () => this.SUBRULE(this.simpleType)},
      ])
    },
  )

  attributeType = this.RULE('attributeType', () => {
    const attr = this.CONSUME(Word)
    this.CONSUME(Assignment)
    const type = this.SUBRULE(this.type)

    return {
      name: attr.image,
      type,
    }
  })

  listType = this.RULE(
    'listType',
    (): AttributeType => {
      const type = this.CONSUME(ListTypeName).image as 'list'
      this.CONSUME(LParen)
      const child = this.SUBRULE(this.type)
      this.CONSUME(RParen)
      return [type, child]
    },
  )

  mapType = this.RULE(
    'mapType',
    (): AttributeType => {
      const type = this.CONSUME(MapTypeName).image as 'map'
      this.CONSUME(LParen)
      const child = this.SUBRULE(this.type)
      this.CONSUME(RParen)
      return [type, child]
    },
  )

  objectType = this.RULE(
    'objectType',
    (): AttributeType => {
      const attrs: {[name: string]: AttributeType} = {}
      this.CONSUME(ObjectTypeName)
      this.CONSUME(LParen)
      this.CONSUME(LBrace)
      this.MANY_SEP({
        SEP: Comma,
        DEF: () => {
          const attr = this.SUBRULE(this.attributeType)
          attrs[attr.name] = attr.type
        },
      })
      this.CONSUME(RBrace)
      this.CONSUME(RParen)

      return ['object', attrs]
    },
  )

  setType = this.RULE(
    'setType',
    (): AttributeType => {
      const type = this.CONSUME(SetTypeName).image as 'set'
      this.CONSUME(LParen)
      const child = this.SUBRULE(this.type)
      this.CONSUME(RParen)
      return [type, child]
    },
  )

  simpleType = this.RULE(
    'simpleType',
    (): AttributeType => {
      return this.CONSUME(SimpleTypeName).image as SimpleType
    },
  )
}

const parser = new TypeParser()

function formatErrors(errors: (ILexingError | IRecognitionException)[]): string {
  return errors.map((error) => `- ${error.message}`).join('\n')
}

export function parseTypeString(input: string): AttributeType {
  const lexingResult = TypeLexer.tokenize(input)
  if (lexingResult.errors.length !== 0) {
    throw new Error(`Could not lex input: \n\n  ${input}\n\nERRORS\n${formatErrors(lexingResult.errors)}`)
  }

  parser.input = lexingResult.tokens
  const type = parser.type()
  if (parser.errors.length !== 0) {
    throw new Error(`Could not parse input: \n\n  ${input}\n\nERRORS\n${formatErrors(parser.errors)}`)
  }

  return type
}
