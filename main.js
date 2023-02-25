
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

let images = document.querySelectorAll("div>img");
for (let elem of images) {
    elem.addEventListener("click", flipCard);
}

//create array of random numbers
function createRandomList() {
    let arr = [];
    let num = Math.floor(Math.random() * (13 - 1) + 1);
    arr.push(num);
    while (arr.length != 12) {
        num = Math.floor(Math.random() * (13 - 1) + 1);
        if (!arr.includes(num))
            arr.push(num)
        //console.log(num, arr)   
    }
    return arr;
}

let arr = createRandomList();
console.log(arr)


let cardObj = {
    pair1: [arr[0], arr[1], "./imgs/brownie.jpg"], //pair with a number
    pair2: [arr[2], arr[3], "./imgs/concha.jpg"],
    pair3: [arr[4], arr[5], "./imgs/donuts.jpg"],
    pair4: [arr[6], arr[7], "./imgs/ice-cream.jpg"],
    pair5: [arr[8], arr[9], "./imgs/muffin.jpg"],
    pair6: [arr[10], arr[11], "./imgs/pancakes.jpg"]
};

let count = 0;
//array to hold selected cards
let cardsSelected = []
//loop through cardsObject, check if any attributes have a matching number to
//the end of the classList of the selected
function flipCard(element) {
    if (count < 2)
        for (key in cardObj) {
            //loop through keys loop
            let num1 = cardObj[key][0];
            let num2 = cardObj[key][1]
            let img = cardObj[key][2]
            //console.log(key, num1, num2)
            if (element.target.classList.contains('card' + num1) || element.target.classList.contains('card' + num2)) {
                count++;
                cardsSelected.push(element.target)
                element.target.src = img;

                /*
                Compare when two cards are selected
                set cardSelected list to 0 
                change images to ingredients if not the same
                */
                if (count === 2) {
                    if(cardsSelected[0].src === cardsSelected[1].src && cardsSelected[0].classList != cardsSelected[1].classList){
                        cardsSelected.length = 0;
                        count=0;
                    }
                    else{
                        //add delay timer 
                        setTimeout(() => {
                            count = 0;
                            for (let elem of cardsSelected)
                                elem.src = "./imgs/ingredients.jpg";
                            console.log(cardsSelected);
                            cardsSelected.length = 0;
                          }, "1000")

                    }
                }
            }
        }


}

//check if two cards are up
function checkIfUp() {

}