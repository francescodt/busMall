'use strict';
console.log('Skybusmall loaded and ready');


var imageElements = document.getElementsByTagName('img');

var pictureIndex1 = 0;
var pictureIndex2 = 1;
var pictureIndex3 = 2;
var totalClicks = 0;
var allBusMallPictures = [];
var votingClickTimesAllowed = 25;


//Add a constructor function for our items
function busSkyMallProduct(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesClicked = 0;
    this.timesViewedOnPage = 0;
    allBusMallPictures.push(this);

}


function getBusProductArray(nameOfThePropertyIWant) {
    var answer = [];
    for (var i = 0; i < allBusMallPictures.length; i++) {
        answer[i] = allBusMallPictures[i][nameOfThePropertyIWant];
    }
    console.log(answer);
    return answer;
}

busSkyMallProduct.prototype.toPercentage = function () {

};


//Create the skymall objects with the 'new' operator
new busSkyMallProduct('R2-D2 suitcase', 'images/bag.jpg');
new busSkyMallProduct('Banana Slicer', 'images/banana.jpg');
new busSkyMallProduct('Pee Pad', 'images/bathroom.jpg');
new busSkyMallProduct('Hipster Rainboots', 'images/boots.jpg');
new busSkyMallProduct('All-in-one breakfast machine', '.images/breakfast.jpg');
new busSkyMallProduct('Italian Bubblegum', 'images/bubblegum.jpg');
new busSkyMallProduct('Back-problem chair', 'images/chair.jpg');
new busSkyMallProduct('Cthulhu', 'images/cthulhu.jpg');
new busSkyMallProduct('Dog muzzle', 'images/dog-duck.jpg');
new busSkyMallProduct('Rare canned GMO free Dragon Meat', 'images/dragon.jpg');
new busSkyMallProduct('Spen', 'images/pen.jpg');
new busSkyMallProduct('Pet Sweep', 'images/pet-sweep.jpg');
new busSkyMallProduct('Pizza scissors', 'images/scissors.jpg');
new busSkyMallProduct('Shark sleeping bag', 'images/shark.jpg');
new busSkyMallProduct('Baby sweep', 'images/sweep.png');
new busSkyMallProduct('Tauntaun sleeping bag', 'images/tauntaun.jpg');
new busSkyMallProduct('Canned unicorn bits', 'images/unicorn.jpg');
new busSkyMallProduct('Tentacle usb', 'images/usb.gif');
new busSkyMallProduct('Can-waterer', 'images/water-can.jpg');
new busSkyMallProduct('Wine prison', 'images/wine-glass.jpg');


// busSkyMallProduct[0].timesClicked = 1
// busSkyMallProduct[1].timesClicked = 1
// busSkyMallProduct[2].timesClicked = 1


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
        runMyChartsNow();
    }


    function productData(index) {
        var asideUl = document.getElementById('voteList');
        var pictureVoteClickData = document.createElement('li');
        pictureVoteClickData.textContent = allBusMallPictures[index].name + ' was viewed ' + allBusMallPictures[index].timesViewedOnPage + ' times, and received ' + allBusMallPictures[index].timesClicked + ' votes, which represents ' + ((allBusMallPictures[index].timesClicked / totalClicks) * 100) + '% of total votes.';
        asideUl.appendChild(pictureVoteClickData);



    }

}

function runMyChartsNow() {
    // chart code thanks to https://www.chartjs.org/docs/latest/
    var ctx = document.getElementById('resultsChart').getContext('2d');
    // eslint-disable-next-line no-undef
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: getBusProductArray('name'),
            datasets: [{
                label: '# of Votes',
                data: getBusProductArray('timesClicked'),
                backgroundColor: [
                    '#d48ae4',
                    '#fb8a72',
                    '#4e32b7',
                    '#3d584b',
                    '#cf323a',
                    '#33600f',
                    '#3e023f',
                    '#01a5e6',
                    '#62c153',
                    '#25ee1a',
                    '#6e0711',
                    '#8623ac',
                    '#d7c436',
                    '#dba169',
                    '#f58010',
                    '#e7c798',
                    '#f975cf',
                    '#c8ffbc',
                    '#ca0206',
                    '#024d21',
                    '#b1c0a9',
                ],
                borderColor: [
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                    '#FFF8DC',
                ],
                borderWidth: 5
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1,
                        }
                    }]
                }
            }
        },
    });
}




// loop for event listener on image clickage
var imageElements = document.getElementsByTagName('img');

for (var c = 0; c < imageElements.length; c++) {
    console.log('this is the event listener for the click');
    imageElements[c].addEventListener('click', imageWasClicked);

}