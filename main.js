const elContainer = document.querySelector(".container");

function findElement(element, parent = document) {
  return document.querySelector(element);
}

 //elon qilish
const elCards = findElement(".cards");
const elSearchBtn = findElement(".btn");
const elSearchInput = findElement(".input");

// cardlarni chqarish qismi

function renderPokemons(array, parent) {
  parent.innerHTML = "";

  array.forEach((element) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.width = "18rem";

    newCard.innerHTML = `
              <img class="card-img-top w-75 d-flex m-0 m-auto" src="${element.img}" alt="${element.name}" />
          <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">${element.type}</p>

               <div class="d-flex gap-5">
              <p class="card-text">${element.weight}</p>
              <p class="card-text">${element.height}</p>
                </div>
  
      
              <button class="btn btn-danger delete-btn" id="delete-btn" data-id="${element.id}">Delete </button>
          </div>
          `;
          newCard.dataset.id = element.id
          
    parent.appendChild(newCard);
  });
}

renderPokemons(pokemons, elCards);



//search qismi

elSearchBtn.addEventListener("click", (evt) => {
    const newArray = [];
    pokemons.forEach((pokemons) => {
        if (
            pokemons.name
                .toLowerCase()
                .includes(elSearchInput.value.toLowerCase())
        ) {
            newArray.push(pokemons);
        }
    });

    renderPokemons(newArray, elCards);
});






//delete qismi

elCards.addEventListener("click", function (evt) {
  if (evt.target.id === "delete-btn") {
    const id = Number(evt.target.dataset.id);
      pokemons = pokemons.filter(e=>e.id!==id)
    
    renderPokemons(pokemons, elCards);
  }
});
