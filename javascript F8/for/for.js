// For loop

// function getRandNumber(min,max,length) {
//     var aray = [length];
//     for(var i = 0 ; i < length ; i++){
//         aray[i] = (Math.floor(Math.random() * (max - min) +min))
//     }
//     return aray;
// }
// console.log(getRandNumber(10,4,1000000000))



// function getTotal(arr){

//     var sum = 0;
//     for(var i = 0; i < arr.length ; i++){
//         sum += arr[i];
//         console.log(arr[i]);
//     }
//     return sum;    
// }
// getTotal([1 ,2,3])

// Tính tổng price 
/*
Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.

Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
*/
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// console.log(orders[2].name)
//    function getTotal(arr){
//     var sum = 0;
//     var arrlength = arr.length;
//     for(var i = 0 ; i < arrlength ; i++){
//         sum += arr[i].price;
//     }
//     return sum;
//    }

//    console.log(getTotal(orders));  

// Expected results:
// getTotal(orders) // Output: 8700000

// function run(object) {
//     var array = [];
//     for (var key in object) {
//         array.push(`Thuộc tính ${key} có giá trị ${object[key]}`);// thêm giá trị cho mảng 
//     }

//     return array
// }

// function run(object) {
//     var sum = [];
//     for(var key in object){
//         sum.push(`thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     return sum
// }

// Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]