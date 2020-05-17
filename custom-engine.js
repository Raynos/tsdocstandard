'use strict'

const Linter = require('standard-engine').linter

var DEFAULT_PATTERNS = [
  '**/*.js',
  '**/*.jsx',
  '**/*.mjs',
  '**/*.cjs',
  '**/*.d.ts'
]

class CustomLinter extends Linter {
  lintFiles (files, opts, cb) {
    if (!files || files.length === 0) {
      files = DEFAULT_PATTERNS
    }
    return super.lintFiles(files, opts, cb)
  }
}

module.exports = CustomLinter
