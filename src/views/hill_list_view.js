const PubSub = require("../helpers/pub_sub.js");
const HillView = require("./hill_view.js");

const HillListView = function(container){
  this.container = container;
}

HillListView.prototype.bindEvents = function(){
  PubSub.subscribe("Munros:munros-data-ready", (evt) => {
    this.hills = evt.detail;
    this.render();
  })
}

HillListView.prototype.render = function() {
  this.hills.forEach((hill) => {
    const hillView = new HillView(this.container, hill);
    hillView.render();
  })
}

module.exports = HillListView;
