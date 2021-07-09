const { get } = require('axios')

exports.shop = function(lang) {
    
    if(lang){
        get(`https://fortool.fr/cm/api/v1/shop?lang=${lang}`)
        .catch(e => { return console.error(e)})
        .then(data => {
            
            return data.data
        })
        
    } else {
        console.log(1)
    }
    
}