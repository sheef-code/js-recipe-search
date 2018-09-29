let container = document.querySelector(".container");
let main = document.querySelector(".main");
let search = document.querySelector("#usr")

// Created header tag and textnode
let header = document.createElement("header");
let h1 = document.createElement('h1');
let h1Text = document.createTextNode('Recipe Search');

// Appended the values
header.append(h1);
h1.append(h1Text);
container.append(header);


search.addEventListener('keydown', function(event) {

  if (event.keyCode === 13) {
    return (grabWord(event.target.value))
  }

})

function grabWord(event) {

  fetch(`http://recipepuppyproxy.herokuapp.com/api/?i=${event}`)

    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      displayRecipe(data)
    })
}



function displayRecipe(data) {
  let context = "";
  for (i = 0; i < data.results.length; i++) {

  let title = data.results[i].title;
  let image = data.results[i].thumbnail;
  let ingredients = data.results[i].ingredients;


    context += `
    <div class="container">
    <h2>${title}</h2>
    <div class="card" style="width:400px">
    <img class="card-img-top" src="${image}" alt="Card image" style="width:100%">
    <div class="card-body">
      <p class="card-text">${ingredients}</p>
      </div>
      </div> `;
  }
  main.innerHTML = context;
}
