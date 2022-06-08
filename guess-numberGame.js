var snum, gnum, i;
snum = 56;
i = 1;
console.log("Clue:secert number is two digit number")
console.log("you have 10 chance")
while (i <= 10) {

    var gnum = parseInt( prompt("enter number"));
    if (snum == gnum) {
        console.log("correct number");
        break;
    }
    else if (gnum > snum) {
        console.log("Too large");
        i++;


    }
    else if (gnum < snum) {
        console.log("Too small");
        i++;


    }
}
console.log("number of chance taken = " + i)
