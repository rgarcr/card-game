
/* Associate a number with an image

/*
*12 cards each has one match
*6 images to match a pair of card
*randomize 2 cards with the same image
*no more than 2 cards with the same image
*Pair 1,2,3..etc with a picture
object{
 1-6 store 2 numbers
 1:1,2, img
 2:3,4, img
 3:5,6, img
 4:7,8, img
 5:9,10, img
 6:11,12, img
}
*/

let cardObj = {
    pair1: [1, 2, "./imgs/brownie.jpg"], //pair with a number
    pair2: [3, 4, "./imgs/concha.jpg"],
    pair3: [5, 6, "./imgs/donuts.jpg"],
    pair4: [7, 8, "./imgs/ice-cream.jpg"],
    pair5: [9, 10, "./imgs/muffin.jpg"],
    pair6: [11, 12, "./imgs/pancakes.jpg"]
};

//loop through cardsObject, check if any attributes have a matching number to
//the end of the classList of the selected
function flipCard(element){

    for (key in cardObj) {
        //loop through keys loop
        let num1 = cardObj[key][0];
        let num2 = cardObj[key][1]
        let img = cardObj[key][2]
        console.log(key, num1, num2)
        if(element.target.classList.contains('card'+num1) || element.target.classList.contains('card' + num2)){
            element.target.src=img;    
            return;
        }
    }    
}