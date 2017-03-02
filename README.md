# csgo-im-api
CSGO.im API package. Allows you to use each and every endpoint available at csgo.im

## Initialising workflow
```JAVASCRIPT
const csgoimAPI = require('csgo-im-api');
const api = new csgoimAPI('csgo_im_api_key');
```

## Getting Steam inventory
```JAVASCRIPT
let options = {
  steamid : '765xxxxxxxxxxxxxx', // SteamID64
  appid : 730, // AppID
  contextid : 2 // ContextID, specific for each AppID
};

api.getSteamInventory(options, (err, items) => {
  if(err){
    //error handling
    console.log(err);
  } else {
    //process your result here...
    //is a standard steam response with
    //the only change is
  }
});
```

## Getting CSGO.im inventory
```JAVASCRIPT
let options = {
  steamid : '765xxxxxxxxxxxxxx' // SteamID64
};

api.getCsgoimInventory(options, (err, items) => {
  if(err){
    //error handling
    console.log(err);
  } else {
    //process your result here...
    //each item contains CItem
  }
});
```

## Deposit
```JAVASCRIPT
let options = {
  tradelink : "https://steamcommunity.com/tradeoffer/new/?partner=12345678&token=ABCDEFGH",
  // tradelink of the user you want the bot to sent the offer to
  items : [9018684386,9018684353,9018684313]
  // assetids of items you want user to give
};

api.deposit(options, (err, res) => {
  if(err){
    //error handling
    console.log(err);
  } else {
    console.log(res); /* -> {
      tradeofferid: "1839998142",
      "token": "h3a5vt87-ashzfiyx-xwx60ui1-9s5x91qj", <- unique transaction ID
      "steamid": "76561198348881069", <-- bot`s steamid to validate the offer
      "itemsFromThem": [
            "9018684386",
            "9018684353"
      ],
      "itemsFromMe": [],
      "offer_type": "deposit"
    }
    */
    // hint: offer objects also comes in
    // sent_offer callback described in csgo.im docs
  }
});
```

## Withdraw
```JAVASCRIPT
let options = {
  tradelink : "https://steamcommunity.com/tradeoffer/new/?partner=12345678&token=ABCDEFGH",
  // tradelink of the user you want the bot to sent the offer to
  items : [87,23,76]
  // csgo.im ids of items you want bot to give
};

api.withdraw(options, (err, res) => {
  if(err){
    //error handling
    console.log(err);
  } else {
    console.log(res); /* -> {
        "success": true,
        "message": "sending offers"
    }
    */
    // hint: offer objects comes in
    // sent_offer callback described in csgo.im docs
  }
});
```

## Transfer and transferSign methods

Currently we are not allowing anyone to use them, so they wont work.
Sitting here only for purpose to be usefull later when we will introduce
transfer confimation window.
