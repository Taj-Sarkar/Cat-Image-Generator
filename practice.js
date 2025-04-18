const apiURL = "https://cataas.com/cat";
const catPic = document.querySelector("#catImg");
const catBtn = document.querySelector("#btn");

const getCatPics = async () => {
    let response = await fetch(apiURL);
    let catImage = await response.blob();
    let imageURL = URL.createObjectURL(catImage);
    catPic.src = imageURL;
};

getCatPics();

catBtn.addEventListener("click",getCatPics);
