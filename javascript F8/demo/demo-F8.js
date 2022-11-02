

function getRandomItem(array) {

    return array [Math.floor(Math.random() * 10)];
   
}
var number = [1,2,3,4,5,6,7,11,22];

console.log(getRandomItem(number));

// function getRandomItem(a) {
//     return a[Math.floor(Math.random() * a.length)];
// }