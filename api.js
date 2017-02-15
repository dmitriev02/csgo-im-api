var Api = function(apikey){
  this._request = require('request');

  this.apikey = apikey;
}

Api.prototype.getCsgoimInventory = function(steamid, callback){
	this._request({
		url : 'http://bots.csgo.im/api/inventory/csgoim',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.getSteamInventory = function(steamid, appid, contextid, callback){
	this._request({
		url : 'http://bots.csgo.im/api/inventory/steam',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.transfer = function(tid, sign, callback){
	this._request({
		url : 'http://bots.csgo.im/api/transferSign',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
			"tid" : tid,
      "sign" : sign
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

Api.prototype.transferSign = function(items, steamid_from, steamid_to, callback){
	this._request({
		url : 'http://bots.csgo.im/api/transferSign',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.deposit = function(items, tradelink, callback){
	this._request({
		url : 'http://bots.csgo.im/api/deposit',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.withdraw = function(items, tradelink, callback){
	this._request({
		url : 'http://bots.csgo.im/api/withdraw',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.withdrawDirect = function(items, tradelink_from, tradelink_to, callback){
	this._request({
		url : 'http://bots.csgo.im/api/withdrawDirect',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.offers = function(steamid, callback){
	this._request({
		url : 'http://bots.csgo.im/api/offers',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.offer = function(tradeofferid, callback){
	this._request({
		url : 'http://bots.csgo.im/api/offer',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.offerItems = function(tradeofferid, callback){
	this._request({
		url : 'http://bots.csgo.im/api/offerItems',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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

Api.prototype.cancelTrade = function(tradeofferid, tradelink, callback){
	this._request({
		url : 'http://bots.csgo.im/api/cancel',
		method : 'POST',
		json : {
			"apikey" : this.apikey,
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
