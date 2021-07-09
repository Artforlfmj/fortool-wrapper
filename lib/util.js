

"use strict";

/**
 * util.js
 * General utility functions
 */

/**
 * supportsLanguage()
 * Checks if supplied language is supported by the API
 *
 * @param {string} lang
 * @returns {boolean}
 */
function supportsLanguage(lang) {
    const supportedLanguages = [
        "en",
        "ar",
        "de",
        "es",
        "es-419",
        "fr",
        "it",
        "ja",
        "ko",
        "pl",
        "pt-BR",
        "ru",
        "tr",
        "zh-CN",
        "zh-Hant"
    ];
    return supportedLanguages.includes(lang);
}

module.exports = {
    supportsLanguage
};
