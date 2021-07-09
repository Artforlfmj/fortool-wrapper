const fetch = require("node-fetch");
const { supportsLanguage } = require("./util");


class BaseClient {
    /**
     * constructor()
     *
     * @param {string} credentials
     * @param {object} [config]
     * @param {string} [config.defaultLanguage]
     */
    constructor(config = {}) {
        

        this.defaultLang = config.defaultLanguage || "en";
        this.ignoreWarnings = Boolean(config.ignoreWarnings);
        

        if (!supportsLanguage(this.defaultLang)) {
            throw new Error(
            `Supplied default language ${this.defaultLang} is not supported`
            );
        }
    }

    /**
     * request()
     * Use node-fetch to query API
     *
     * @param {string} uri
     * @param {object} [options]
     * @param {string} [options.method]
     * @returns {Promise<object>}
     */
    async request(uri, options = { method: "GET" }) {
        // In test mode, return the URI we are about to fetch
        if (process.env.testMode) {
            return uri;
        }
        const response = await fetch(uri, {
            method: options.method,
            
        });

        const data = await response.json();
        return data;
    }

    /**
     * Prints a warning when using deprecated endpoints
     * @param {string} oldMethod
     * @param {string} newMethod
     */
    deprecationWarning(oldMethod, newMethod) {
        if (this.ignoreWarnings) return;
        console.warn(`WARNING: ${oldMethod} has been deprecated - please use ${newMethod}`)
    }
}

module.exports = BaseClient;