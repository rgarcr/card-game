//document.querySelector(".card-container").addEventListener("click", test)
console.log("test");
let obj1 = document.querySelector("img:nth-child(12) ");
let count = 0;
//console.log(obj1)
function test(obj) {
    // let obj = document.querySelector(".card-container");
    //console.log(obj);
    count++;
    /*
    if(count <= 2){
    console.log(obj.target.style.border, 'test')
    
    if (!obj.target.style.border || obj.target.style.border==="none")
        obj.target.style.border = "blue solid 5px";
    else
        obj.target.style.border = "none";

    }
*/    
    
}

//document.querySelectorAll("img").addEventListener("click", testImgs);
const matches = document.querySelectorAll("div > img");
//console.log(matches[2])
function testImgs(obj) {
    for (let elem of obj) {
        // console.log(elem)
        elem.addEventListener('click', test)
    }
}

testImgs(matches)

function tempBlue(elem) {
    elem.style.border = "solid blue 5px";
}