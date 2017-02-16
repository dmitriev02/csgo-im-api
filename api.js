var Api = function(apikey){
  this._request = require('request');

  this.apikey = apikey;
}

Api.prototype.getCsgoimInventory = function(data, callback){
  var steamid = null;
  var apikey = null;

  if(data.steamid){
    steamid = data.steamid;
  } else {
    callback('missing important argument steamid', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/inventory/csgoim',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"steamid" : steamid
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp.inventory);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.getSteamInventory = function(data, callback){
  var steamid = null;
  var appid = null;
  var contextid = null;
  var apikey = null;

  if(data.steamid){
    steamid = data.steamid;
  } else {
    callback('missing important argument steamid', null);
    return;
  }

  if(data.appid){
    appid = data.appid;
  } else {
    callback('missing important argument appid', null);
    return;
  }

  if(data.contextid){
    contextid = data.contextid;
  } else {
    callback('missing important argument contextid', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/inventory/steam',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"steamid" : steamid,
      "appid" : appid,
      "contextid" : contextid
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp.inventory);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.transfer = function(data, callback){
  var tid = null;
  var sign = null;
  var apikey = null;

  var steamid_to = null;
  var items = null;

  if(data.tid){
    tid = data.tid;
  } else {
    callback('missing important argument tid', null);
    return;
  }

  if(data.sign){
    sign = data.sign;
  } else {
    callback('missing important argument sign', null);
    return;
  }

  if(data.steamid_to){
    steamid_to = data.steamid_to;
  }

  if(data.items){
    items = data.items;
  }

  if((!tid && !sign) && (!steamid_to && !items)){
    callback('tid && sign or steamid_to && items must be specified', null);
    return;
  }

  var json = {
    "apikey" : apikey || this.apikey,
    "tid" : tid,
    "sign" : sign
  };

  if(data.steamid_to && data.items){
    json = {
      "apikey" : apikey || this.apikey,
      "steamid_to" : steamid_to,
      "items" : items
    };
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/transfer',
		method : 'POST',
		json : json
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, true);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.transferSign = function(data, callback){
  var items = null;
  var steamid_from = null;
  var steamid_to = null;
  var apikey = null;

  if(data.items){
    items = data.items;
  } else {
    callback('missing important argument items', null);
    return;
  }

  if(data.steamid_from){
    steamid_from = data.steamid_from;
  } else {
    callback('missing important argument steamid_from', null);
    return;
  }

  if(data.steamid_to){
    steamid_to = data.steamid_to;
  } else {
    callback('missing important argument steamid_to', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/transferSign',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"items" : items,
      "steamid_from" : steamid_from,
      "steamid_to" : steamid_to
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.deposit = function(data, callback){
  var items = null;
  var tradelink = null;
  var apikey = null;

  if(data.items){
    items = data.items;
  } else {
    callback('missing important argument items', null);
    return;
  }

  if(data.tradelink){
    tradelink = data.tradelink;
  } else {
    callback('missing important argument tradelink', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/deposit',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"tradelink" : tradelink,
			"items" : items
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp.offer);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.withdraw = function(data, callback){
  var items = null;
  var tradelink = null;
  var apikey = null;

  if(data.items){
    items = data.items;
  } else {
    callback('missing important argument items', null);
    return;
  }

  if(data.tradelink){
    tradelink = data.tradelink;
  } else {
    callback('missing important argument tradelink', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/withdraw',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"tradelink" : tradelink,
			"items" : items
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp.message);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.withdrawDirect = function(data, callback){
  var items = null;
  var tradelink_from = null;
  var tradelink_to = null;
  var apikey = null;

  if(data.items){
    items = data.items;
  } else {
    callback('missing important argument items', null);
    return;
  }

  if(data.tradelink_from){
    tradelink_from = data.tradelink_from;
  } else {
    callback('missing important argument tradelink_from', null);
    return;
  }

  if(data.tradelink_to){
    tradelink_to = data.tradelink_to;
  } else {
    callback('missing important argument tradelink_to', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/withdrawDirect',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"tradelink_from" : tradelink_from,
      "tradelink_to" : tradelink_to,
			"items" : items
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp.message);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.offers = function(data, callback){
  var steamid = null;
  var apikey = null;

  if(data.steamid){
    steamid = data.steamid;
  } else {
    callback('missing important argument steamid', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/offers',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"steamid" : steamid
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp.offers);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.offer = function(data, callback){
  var tradeofferid = null;
  var apikey = null;

  if(data.tradeofferid){
    tradeofferid = data.tradeofferid;
  } else {
    callback('missing important argument tradeofferid', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/offer',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"tradeofferid" : tradeofferid
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp.offer);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.offerItems = function(data, callback){
  var tradeofferid = null;
  var apikey = null;

  if(data.tradeofferid){
    tradeofferid = data.tradeofferid;
  } else {
    callback('missing important argument tradeofferid', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/offerItems',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"tradeofferid" : tradeofferid
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, resp.items);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

Api.prototype.cancelTrade = function(data, callback){
  var tradeofferid = null;
  var tradelink = null;
  var apikey = null;

  if(data.tradeofferid){
    tradeofferid = data.tradeofferid;
  } else {
    callback('missing important argument tradeofferid', null);
    return;
  }

  if(data.tradelink){
    tradelink = data.tradelink;
  } else {
    callback('missing important argument tradelink', null);
    return;
  }

  if(data.apikey){
    apikey = data.apikey;
  }

	this._request({
		url : 'http://bots.csgo.im/api/cancel',
		method : 'POST',
		json : {
			"apikey" : apikey || this.apikey,
			"tradeofferid" : tradeofferid,
      "tradelink" : tradelink
		}
	}, function(error, response, body) {
		if(error){
	    callback(error, null);
			return;
		}

		var resp = body;
		if(response.statusCode != 200) {
			callback(response.statusCode, null);
		} else {
			if(resp.success){
				callback(null, true);
			} else {
				callback(resp.error, null);
			}
		}
	}.bind(this));
}

module.exports = Api;
