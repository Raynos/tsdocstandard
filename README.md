# TSDoc Standard

### Standard but also use TypeScript on JS files with jsdoc.

This `standard` configuration understands that you want to use
typescript on `.js` files using `jsdoc` / `tsdoc` syntax.

The `eslint` configuration knows all about `jsdoc` & `typescript`
to give you improved type safety on `.js` files with `jsdoc`
annotations.

## Motivation

This `tsdocstandard` is here to help you convert a `standard`
JavaScript project into a JavaScript + jsdoc + typescript project.

To use `tsdocstandard` you do need some dependencies, namely
`npm install -D typescript` and a `./tsconfig.json` file.

Here is an example [`tsconfig.json`](https://github.com/Raynos/tsdocstandard/blob/master/tsconfig.json)

Once you run `tsdocstandard` expect to get 100 warnings about
missing jsdoc annotations. That's the point, it will help you
convert your JavaScript to typed JavaScript with jsdoc comments.

Once you fix all the missing annotations expect almost 100%
`type-coverage` ; ( You can measure it with the
[`type-coverage`](https://github.com/plantain-00/type-coverage)
library ).

## Migration

If you want to migrate a larger codebase one file at it's
recommended you install both `standard` & `tsdocstandard`.

Then use the `tsdocstandard` & `standard` keys in package.json

```json
{
  "tsdocstandard": {
    "ignore": [
      "old-code.js"
    ]
  },
  "standard": {
    "ignore": [
      "new-code.js"
    ]
  }
}
```

Basically run both linters and ignore the files that have and
have not been migrated.

## Install

```bash
npm install -D typescript # dependency
npm install -D tsdocstandard
```

## Status (experimental)

This is the very very first version of this ruleset. I've applied
it to one "typescript" codebase.

 - https://github.com/Raynos/tapzero
 - https://github.com/Raynos/fake-cloudwatch-logs

I need to use this ruleset on a larger set of typescript files
before I will be happy with it.

Any and all feedback is useful in issues or PRs

## Known issues

There are limitations with the following rules

 - `no-unsafe-assignment` ( https://github.com/typescript-eslint/typescript-eslint/issues/1943 )
 - `no-invalid-void-type` ( https://github.com/typescript-eslint/typescript-eslint/pull/1960 )

## How to ignore files

Add a `tsdocstandard` key like documented for `standard`
https://standardjs.com/#how-do-i-ignore-files

## How to use in text editor.

I have `standard` vscode installed. You can configure it on a
per project basis whether to use `standard`; `semistandard` or
`standardx`.

For my `tsdocstandard` projects I configured it to use `standardx`
then in my home dir I installed `tsdocstandard` as `standardx`

```sh
$ cat ~/projects/package.json
{
  "dependencies": {
    "standardx": "Raynos/tsdocstandard#v15.2.1"
  }
}
```

Since I do not use `standardx` at all, i can make it available
"globally" and have my text editor configured to use `tsdocstandard`
via the `standardx` binary name.

## Rules

Importantly:

 - `jsdoc`
 - `@eslint-typescript`

There's lots of rules. Plus `standard` as well.

## Usage

Literally just like [`standard`](http://ghub.io/standard)
