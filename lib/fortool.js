/**
 * fortnite-api-io
 * Module to make API calls to fortool
 *
 * @author Artlfmj

 * @license MIT
 */

"use strict";



// Internal Libaries
const BaseClient = require('./base-client');

const endpoints = require("./endpoints");

/**
 * Fortnite API Class
 */
class FortniteAPI extends BaseClient {

    /**
     * constructor()
     *
     * @param {string} credentials
     * @param {object} [config]
     * @param {string} [config.defaultLanguage]
     * @param {string} [config.ignoreWarnings]
     */
    constructor(credentials, config = {}) {
        super(credentials, config)

        
    }

    /**
     
     
     * @param {object} [options]
     * @param {string} [options.lang] en, ar, de, es, es-419, fr, it, ja, ko, pl, pt-BR, ru, tr, zh-CN, zh-Hant
     * @returns {Promise<object>}
     */
    shop(options = {}) {
        
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.shop(lang);
        return this.request(uri);
    }
    news(options = {}) {
        
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.news(lang);
        return this.request(uri);
    }
    rotation(options = {}) {
        
        const lang = options.lang || this.defaultLang;
        const uri = endpoints.rotation(lang);
        return this.request(uri);
    }

   
}

module.exports = FortniteAPI;
