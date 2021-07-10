function fetchPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
      let imageContainer = document.getElementById("dog-image-container");

      // for (let key in data) {
      //   console.log(key);
      //   console.log(data.message)
      // }
      let imageArr = data.message;
      imageArr.map((image) => {
        let imgBreed = document.createElement("img");
        imgBreed.src = image;
        imgBreed.alt = "breed";
        imageContainer.appendChild(imgBreed);
      });
    });
  let breedsData = [];

  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  let breedTypeContainer = document.getElementById("dog-breeds");
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      for (let key in data.message) {
        breedsData.push(key);
        let breedType = document.createElement("li");
        breedType.innerText = key;
        breedTypeContainer.appendChild(breedType);
        //console.log(breedType);
        breedType.addEventListener("click", () => {
          breedType.className = "breed-name";
        });
      }
    });

  let dropDownButton = document.getElementById("breed-dropdown");
  let optionArr;
  dropDownButton.addEventListener("change", (event) => {
    let alphabet = event.target.value;
    let dogBreedContainer = document.getElementById("dog-breeds");
    dogBreedContainer.textContent = "";
    let newBreedArray = breedsData.filter((item) => {
      return item.charAt(0) === alphabet;
    });
    for (let item of newBreedArray) {
      let breedTypeContainer = document.getElementById("dog-breeds");

      let breedType = document.createElement("li");
      breedType.innerText = item;
      breedTypeContainer.appendChild(breedType);
    }
  });
}
document.addEventListener("DOMContentLoaded", fetchPics);
