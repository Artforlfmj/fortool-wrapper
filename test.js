const fortool = require('.')


  console.time();
  const client = new fortool({
    defaultLanguage: 'fr', // Optional - will default to 'en'
    ignoreWarnings: false // Optional -will default to false
})
  client.shop()
  client.news()
  client.rotation()
  .then(doc => {
    console.log(doc)
  })
  
  console.timeEnd();
