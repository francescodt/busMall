'use strict';
console.log('Skybusmall loaded and ready');


var imageElements = document.getElementsByTagName('img');

var pictureIndex1 = 0;
var pictureIndex2 = 1;
var pictureIndex3 = 2;
var totalClicks = 0;
var allBusMallPictures = [];
var votingClickTimesAllowed = 5;


//Add a constructor function for our items

function busSkyMallProduct(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesClicked = 0;
    this.timesViewedOnPage = 0;
    allBusMallPictures.push(this);

}

//Create the skymall objects with the 'new' operator

new busSkyMallProduct('bag', '../images/bag.jpg');
new busSkyMallProduct('banana', '../images/banana.jpg');
new busSkyMallProduct('bathroom', '../images/bathroom.jpg');
new busSkyMallProduct('boots', '../images/boots.jpg');
new busSkyMallProduct('breakfast', '../images/breakfast.jpg');
new busSkyMallProduct('bubblegum', '../images/bubblegum.jpg');
new busSkyMallProduct('chair', '../images/chair.jpg');
new busSkyMallProduct('cthulhu', '../images/cthulhu.jpg');
new busSkyMallProduct('dog-duck', '../images/dog-duck.jpg');
new busSkyMallProduct('dragon', '../images/dragon.jpg');
new busSkyMallProduct('pen', '../images/pen.jpg');
new busSkyMallProduct('pet-sweep', '../images/pet-sweep.jpg');
new busSkyMallProduct('scissors', '../images/scissors.jpg');
new busSkyMallProduct('shark', '../images/shark.jpg');
new busSkyMallProduct('sweep', '../images/sweep.png');
new busSkyMallProduct('tauntaun', '../images/tauntaun.jpg');
new busSkyMallProduct('unicorn', '../images/unicorn.jpg');
new busSkyMallProduct('usb', '../images/usb.gif');
new busSkyMallProduct('water-can', '../images/water-can.jpg');
new busSkyMallProduct('wine-glass', '../images/wine-glass.jpg');



// function to see if image was clicked
function imageWasClicked(event) {
    console.log('Image was indeed clicked.');
    totalClicks++;

    // checking for clicks
    if (event.srcElement.id === "first") {
        allBusMallPictures[pictureIndex1].timesClicked++;
    } else if (event.srcElement.id === "second") {
        allBusMallPictures[pictureIndex2].timesClicked++;
    } else if (event.srcElement.id === "third") {
        allBusMallPictures[pictureIndex3].timesClicked++;
    }



    var nextPictureIndex1 = Math.floor(Math.random() * allBusMallPictures.length);
    while ((nextPictureIndex1 === pictureIndex1) || (nextPictureIndex1 === pictureIndex2) || (nextPictureIndex1 === pictureIndex3)) {
        var nextPictureIndex1 = Math.floor(Math.random() * allBusMallPictures.length);
    }

    var nextPictureIndex2 = Math.floor(Math.random() * allBusMallPictures.length);
    while ((nextPictureIndex2 === pictureIndex2) || (nextPictureIndex2 === pictureIndex1) || (nextPictureIndex2 === pictureIndex3) || (nextPictureIndex2 === nextPictureIndex1)) {
        var nextPictureIndex2 = Math.floor(Math.random() * allBusMallPictures.length);
    }

    var nextPictureIndex3 = Math.floor(Math.random() * allBusMallPictures.length);
    while ((nextPictureIndex3 === pictureIndex3) || (nextPictureIndex3 === pictureIndex1) || (nextPictureIndex3 === nextPictureIndex2) || (nextPictureIndex3 === nextPictureIndex1) || (nextPictureIndex3 === nextPictureIndex2)) {
        var nextPictureIndex3 = Math.floor(Math.random() * allBusMallPictures.length);
    }


    // Pick a random picture to display
    imageElements[0].src = allBusMallPictures[pictureIndex1].imageUrl;
    allBusMallPictures[pictureIndex1].timesViewedOnPage++;
    imageElements[1].src = allBusMallPictures[pictureIndex2].imageUrl;
    allBusMallPictures[pictureIndex2].timesViewedOnPage++;
    imageElements[2].src = allBusMallPictures[pictureIndex3].imageUrl;
    allBusMallPictures[pictureIndex3].timesViewedOnPage++;


    // Set up a ref to pictureindex1
    pictureIndex1 = nextPictureIndex1;
    pictureIndex2 = nextPictureIndex2;
    pictureIndex3 = nextPictureIndex3;



    if (totalClicks >= votingClickTimesAllowed) {
        for (var i = 0; i < allBusMallPictures.length; i++) {
            productData(i);
        }
        for (var j = 0; j < imageElements.length; j++) 
        imageElements[j].removeEventListener('click', imageWasClicked);
    }

    var ulElement = document.getElementById('voteList');

    function productData(){
      var productVoteData = document.createElement('li');
      productVoteData.textContent = allBusMallPictures[index].name + ' was viewed ' + allBusMallPictures[index].timesViewedOnPage + ' times, and received ' + allBusMallPictures[index].timesClicked + ' votes, which represents ' + ((allBusMallPictures[index].timesClicked/totalClicks)* 100) + '% of total votes.';
      ulElement.appendChild(productVoteData);
    }
    



}

    // // loop for event listener on image clickage
    // var imageElements = document.getElementsByTagName('img');

    // for (var c = 0; c < imageElements.length; c++) {
    //     console.log('this is the event listener for the click');
    //     imageElements[c].addEventListener('click', imageWasClicked);

    // }