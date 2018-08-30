const RequestHelper = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");

const Munros = function(url){
  this.url = url;
  this.munros = [];
};

Munros.prototype.getData = function(){
  const requestHelper = new RequestHelper(this.url);
  requestHelper.get()
  .then(data => this.handleData(data))
  .catch((err) => {
    console.error(err);
  });
}

Munros.prototype.handleData = function(data){
  this.munros = data;
  PubSub.publish("Munros:munros-data-ready", this.munros);
}

module.exports = Munros;
