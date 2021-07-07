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
  dropDownButton.addEventListener("click", (event) => {
    optionArr = event.target.children;
    console.log(optionArr);
    for (let i = 0; i < optionArr.length; i++) {
      let option = optionArr[i];
      console.log(option);
      option.addEventListener("click", () => {
        alert("clicked");
      });
    }
    // for (let option of optionArr) {
    //   option.addEventListener("click", (event) => {
    //     console.log(event);
    //     let newArr = breedsData.filter((item) => {
    //       item.charAt(0) === alphabetChoice;
    //       console.log(newArr);
    //     });
    //   });
    // }
  });
}
document.addEventListener("DOMContentLoaded", fetchPics);
