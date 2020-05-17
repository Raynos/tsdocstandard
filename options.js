var path = require('path')
var pkg = require('./package.json')

module.exports = {
  // cmd, homepage, bugs all pulled from package.json
  cmd: 'tsdocstandard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'JavaScript + Typescript + JSDoc',
  eslint: require('eslint'),
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  parseOpts: (opts, packageOpts, rootDir) => {
    opts.eslintConfig = opts.eslintConfig || {}
    opts.eslintConfig.parserOptions = opts.eslintConfig.parserOptions || {}

    const cwd = opts.cwd || process.cwd()
    opts.eslintConfig.parserOptions.tsconfigRootDir = cwd
    opts.eslintConfig.parserOptions.project = './tsconfig.json'

    if (opts.filename && opts.filename.indexOf('file://') === 0) {
      opts.filename = opts.filename.slice(7)
    }

    return opts
  }
}
