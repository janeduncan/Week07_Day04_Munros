const PubSub = require("../helpers/pub_sub.js");

const HillView = function(container, hill){
  this.hillsContainer = container;
  this.hill = hill;
}

HillView.prototype.render = function () {
  const hillContainer = document.createElement('div');
  hillContainer.classList.add('hill');

  const name = this.createHillHeading();
  hillContainer.appendChild(name);

  const hillsList = this.createHillDetailsList();
  hillContainer.appendChild(hillsList);

  this.hillsContainer.appendChild(hillContainer);
};

HillView.prototype.createHillHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('hill-name');
  name.textContent = this.hill.name;
  return name;
}

HillView.prototype.createHillDetailsList = function () {
  const hillDetailsList = document.createElement('ul');
  hillDetailsList.classList.add('details');
  console.log("hillo");
  this.populateList(hillDetailsList);
  return hillDetailsList;
}

HillView.prototype.populateList = function (list) {
    const hillMeaningListItem = document.createElement('li');
    hillMeaningListItem.textContent = this.hill.meaning;
    list.appendChild(hillMeaningListItem);
    const hillHeightListItem = document.createElement('li');
    hillHeightListItem.textContent = this.hill.height;
    list.appendChild(hillHeightListItem);
  }

module.exports = HillView;
