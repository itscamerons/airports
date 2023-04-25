console.log('console here')




// get the References of what you want to change
let navImages = document.querySelectorAll('.cloud');

let mainImage = document.querySelector('.airplane');


function greenCloud(){
    mainImage.src = "images/clouds-green.jpg";
}

function blueCloud(){
    mainImage.src = "images/clouds-blue.jpg"
}

function redCloud(){
    mainImage.src = "images/clouds-red.jpg"
}

function goBack(){
    mainImage.src = 'images/airplane.jpg'
}
// call Function on a scpecific event

navImages[0].onclick = blueCloud;
navImages[1].onclick = greenCloud;
navImages[2].onclick = redCloud;
document.main.onclick = goBack;