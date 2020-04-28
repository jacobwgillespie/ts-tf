import path from 'path'
import {parseModule} from '.'

it('should correctly parse HCL module', async () => {
  const metadata = await parseModule(path.join(__dirname, '../test/module'))
  expect(metadata).toMatchSnapshot()
})

it('should error when parsing a broken HCL module', async () => {
  const metadata = parseModule(path.join(__dirname, '../test/broken-module'))
  return expect(metadata).rejects.toMatchSnapshot()
})
