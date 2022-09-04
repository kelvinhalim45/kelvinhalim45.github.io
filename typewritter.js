// set up text to print, each item in array is new line
var aText = new Array(
    "Hello Min!, today is your very special day",
    "So, i created a page to celebrate this extraordinary day.",
    "I Wish happiness, and everthing you wish can be achived.",
    "Happy Birthday Lê Thùy Minh Hằng"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    // while (iRow < iIndex) {
    //     sContents += aText[iRow++] + '<br />';
    // }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 1000);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }


}

setTimeout(typewriter(), 5000)