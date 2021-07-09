# fortnite-api-io

[![npm version](https://flat.badgen.net/npm/v/fortnite-api-io)](https://www.npmjs.com/package/fortool)
![](https://github.com/Artforlfmj/fortool-wrapper.git)


## Install the Module
```bash
npm install fortool
```

## Require and Instantiate
```js
const Fortool = require("fortool");

// Instantiate with API Credentials
const client = new Fortool({
    defaultLanguage: 'en', // Optional - will default to 'en'
    ignoreWarnings: false // Optional -will default to false
});
```

## Example API Calls
Here ae the available API calls

```js
// Get the shop
const shop = await client.shop();

// Get the news
const news = await client.news();

// Get the rotation
const rotation = await client.rotation();
```



## Acknowledgement
Thanks for the inspiration of the fortniteapi.io module

## License
MIT