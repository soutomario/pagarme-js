/**
 * @name Company
 * @description This module exposes functions
 *              related to the `/company` and
 *              `/companies` paths.
 *
 * @module company
 **/

import routes from '../routes'
import request from '../request'

/**
 * `POST /companies`
 * Creates a company from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} payload The payload for the request
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const create = (opts, payload) =>
  request.post(opts, routes.company.base, payload)

 /**
 * `POST /companies/temporary`
 * Creates a test-only temporary company.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const createTemporary = opts =>
  request.post(opts, routes.company.temporary, {})

export default {
  create,
  createTemporary,
}
