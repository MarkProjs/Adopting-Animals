var petLists = [
  {
    image: "../../assets/goldenRetriever.jpg",
    type: "dog",
    breed: "Golden Retriever",
    age: "Young",
    gender: "Female",
    getAlong: {
      otherDogs: "Yes",
      otherCats: "No",
      smallChildren: "Yes"
    },
    description: "This is a dog",
    ownerName: "John Doe",
    ownerEmail: "5V4t8@example.com",
  }, 
  {
    image: "../../assets/persianCat.jpg",
    type: "cat",
    breed: "Persian",
    age: "Adult",
    gender: "Male",
    getAlong: {
      otherDogs: "No",
      otherCats: "Yes",
      smallChildren: "Yes"
    },
    description: "This is a cat",
    ownerName: "Jane Doe",
    ownerEmail: "lW1x4@example.com",
  }
];

function addPet(e) {
  const petList = document.getElementById("petList");
  const pet = document.createElement("div");
  pet.classList.add("pet-card");

  pet.innerHTML = `
    <img src = "${e.image}" alt="${e.type} class="pet-image"/>
    <div class="pet-info">
    <h2>${e.breed} ${e.type}</h2>
      <p><strong>Age: </strong> ${e.age}</p>
      <p><strong>Gender:</strong> ${e.gender}</p>
      <p><strong>Get along with:</strong></p>
      <ul>
        <li>Other dogs: ${e.getAlong.otherDogs}</li>
        <li>Other cats: ${e.getAlong.otherCats}</li>
        <li>Small children: ${e.getAlong.smallChildren}</li>
      </ul>
      <p><strong>Description:</strong> ${e.description}</p>
      <p><strong>Owner Name:</strong> ${e.ownerName}</p>
      <p><strong>Owner Email:</strong> ${e.ownerEmail}</p>
    </div>
    <button class="adopt-button" onclick="">Interested</button>
  `;

  petList.appendChild(pet);
}


function loadPets() {
  petLists.forEach(addPet);
}

loadPets();