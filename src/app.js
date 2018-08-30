const Munros = require("./models/munros.js");
const HillListView = require("./views/hill_list_view.js");
const HillView = require("./views/hill_view.js");

document.addEventListener('DOMContentLoaded', () => {

  const hillListContainer = document.querySelector("#hills");
  const hillListView = new HillListView(hillListContainer);
  hillListView.bindEvents();

  const munros = new Munros("https://munroapi.herokuapp.com/api/munros");
  munros.getData();

})
