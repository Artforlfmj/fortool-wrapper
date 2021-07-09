

"use strict";



const endpoint = "https://fortool.fr/cm/api/v1";
module.exports = {
    shop: (lang) => `${endpoint}/shop?lang=${lang}`,
    news : (lang) => `${endpoint}/news?lang=${lang}`,
    rotation : (lang) => `${endpoint}/rotation/next?lang=${lang}`
    
};
