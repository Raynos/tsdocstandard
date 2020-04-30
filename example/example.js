// @ts-check
'use strict'

/** @class */
class Demo {
  /**
   * @param {number} a
   * @param {number} b
   */
  constructor (a, b) {
    /** @type {number} */
    this.a = a
    /** @type {number} */
    this.b = b
  }

  /**
   * @param {number} c
   * @returns {number}
   */
  foo (c) {
    return this.a + c
  }
}

module.exports = Demo
