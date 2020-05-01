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
    configFile: path.join(__dirname, 'eslintrc.json'),
    parserOptions: {
      project: path.join(process.cwd(), './tsconfig.json')
    }
  },
  customParseOpts: (opts, packageOpts, rootDir) => {
    opts.eslintConfig = opts.eslintConfig || {}
    opts.eslintConfig.parserOptions = opts.eslintConfig.parserOptions || {}

    const cwd = rootDir || process.cwd()
    opts.eslintConfig.parserOptions.project =
      path.join(cwd, './tsconfig.json')

    return opts
  }
}
