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

function filterPets() {
  let type = document.querySelector('input[name="petType"]:checked')?.value;
  let breed = document.getElementById("breed").value.trim();
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;

  // get all checked values for "getAlong"
  let getAlongCheckboxes = document.querySelectorAll('input[name="getAlong"]:checked');
  let getAlongValues = Array.from(getAlongCheckboxes).map(cb => cb.value);

  let filteredPets = petLists.filter((pet) => {
    // check getAlong for all selected options
    let matchesGetAlong = getAlongValues.every(val => {
      if (val === "Other Dogs") return pet.getAlong.otherDogs === "Yes";
      if (val === "Other Cats") return pet.getAlong.otherCats === "Yes";
      if (val === "Small Children") return pet.getAlong.smallChildren === "Yes";
      return false;
    });

    return (
      pet.type.toLowerCase() === type.toLowerCase() &&
      pet.breed.toLowerCase() === breed.toLowerCase() &&
      pet.age === age &&
      pet.gender === gender &&
      matchesGetAlong
    );
  });

  return filteredPets;
}

function loadPets(arr) {
  arr.forEach(addPet);
}

function showFilteredPets(e) {

  let filteredPets = filterPets();
  let petList = document.getElementById("petList");
  petList.innerHTML = "";
  filteredPets.forEach(addPet);
}
loadPets(petLists);
document.querySelector("button[type='submit']").addEventListener("click", (e) => {
e.preventDefault();
showFilteredPets();
});
