# csgo-im-api
CSGO.im API package. Allows you to use each and every endpoint available at csgo.im

# Initialising workflow
```JAVASCRIPT
const csgoimAPI = require('csgo-im-api');
const api = new csgoimAPI('csgo_im_api_key');

api.getSteamInventory({ steamid : '765xxxxxxxxxxxxxx', appid : 730, contextid : 2 }, (err, items) => {
  if(err){
    //error handling
    console.log(err);
  } else {
    //process your result here...
  }
});
```
