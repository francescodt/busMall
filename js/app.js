'use strict';
console.log('Skybusmall loaded and ready');


var imgfirstClicked = 0;
var imgsecondClicked = 0;
var pictureIndex1 = 0;
var pictureIndex2 = 0;
var totalClicks = 0;
var allBusMallPictures = [];
var votingClickTimesAllowed = 25;


//Add a constructor function for our items

function busSkyMall (name, imageUrl) {
    this.name= name;
    this.imageUrl = imageUrl;
    this.timesClicked = 0;
    allBusMallPictures.push(this);

}

//Create the skymall objects with the 'new' operator

new busSkyMall('bag','../images/bag.jpg');
new busSkyMall('banana','../images/banana.jpg');
new busSkyMall('bathroom','../images/bathroom.jpg');
new busSkyMall('boots','../images/boots.jpg');
new busSkyMall('breakfast','../images/breakfast.jpg');
new busSkyMall('bubblegum','../images/bubblegum.jpg');
new busSkyMall('chair','../images/chair.jpg');
new busSkyMall('cthulhu','../images/cthulhu.jpg');
new busSkyMall('dog-duck','../images/dog-duck.jpg');
new busSkyMall('dragon','../images/dragon.jpg');
new busSkyMall('pen','../images/pen.jpg');
new busSkyMall('pet-sweep','../images/pet-sweep.jpg');
new busSkyMall('scissors','../images/scissors.jpg');
new busSkyMall('shark','../images/shark.jpg');
new busSkyMall('sweep','../images/sweep.png');
new busSkyMall('tauntaun','../images/tauntaun.jpg');
new busSkyMall('unicorn','../images/unicorn.jpg');
new busSkyMall('usb','../images/usb.gif');
new busSkyMall('water-can','../images/water-can.jpg');
new busSkyMall('wine-glass', '../images/wine-glass.jpg');



// function to see if image was clicked
function imageWasClicked(event) {
    console.log('Image was indeed clicked.');
    totalClicks++;


// checking for clicks
    if(event.srcElement.id === "first"){
        allBusMallPictures[pictureIndex1].timesClicked++;
    } else if (event.srcElement.id === "second"){
        allBusMallPictures[pictureIndex2].timesClicked++;
    }



var nextPictureIndex1 = Math.floor(Math.random() * allBusMallPictures.length);
while((nextPictureIndex1 === pictureIndex1) || (nextPictureIndex1 === pictureIndex2)) {
    var nextPictureIndex1 = Math.floor(Math.random() * allBusMallPictures.length);
}


var nextPictureIndex2 = Math.floor(Math.random() * allBusMallPictures.length);
while((nextPictureIndex2 === pictureIndex2) || (nextPictureIndex2 === pictureIndex1)) {
    var nextPictureIndex2 = Math.floor(Math.random() * allBusMallPictures.length);
}



// Pick a random picture to display
imageElements[0].src = allBusMallPictures[pictureIndex1].imageUrl;
imageElements[1].src = allBusMallPictures[pictureIndex2].imageUrl;






// Set up a ref to pizzaindex1

pictureIndex1 = nextPictureIndex1;
pictureIndex2 = nextPictureIndex2;



    if (totalClicks >= votingClickTimesAllowed ) {
        var footerElement = docment.getElementsByTagName('footer')[0];
        if(footerElement.firstElementChild){
            footerElement.firstElementChild.remove();
        }
        footerElement.textContent = `You picked the first image ${pictureIndex1} times and the second image ${pizzaIndex2} times.`;

    }

}


// loop for event listener on image clickage
var imageElements = document.getElementsByTagName('img');

for(var i = 0; i < imageElements.length; i++){
    console.log('this is the event listener for the click');
    imageElements[i].addEventListener('click', imageWasClicked);

}