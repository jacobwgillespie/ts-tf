# InfraScript

**Status:** Alpha

InfraScript is a language for writing configuration, based on TypeScript, and primarily targeting infrastructure-as-code tools like Terraform or declarative configuration like Kubernetes manifests.

## Why

- Real language
- Safer language experience
- Exceptional tooling
- Type system safety by providing a targeted experience

## Installation

```
$ yarn global add infrascript
```

## Usage

```
$ config lint
$ config run src/index.ts
```

## Differences with TypeScript

- Every possible strict setting is enabled
- Mutating data is forbidden
- Classes are forbidden
- Linting must pass to execute a script
- TODO

## Contributing

Contributions are welcome, though note that InfraScript is very much a work-in-progress, code can change significantly.

## License

MIT License, see `LICENSE`
