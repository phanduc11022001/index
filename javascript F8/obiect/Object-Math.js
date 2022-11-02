// Math object
/*

    1. Math.PI trả về số pi
    2. Math.round() hàm trả về số  lân cận vd: 1,3=1, 1,7=2;
    3. Math.abs() hàm trả về đối số vd: -5=5; -6=6;
    4. Math.ceil() hàm  làm tròn số thập phân xuống
    5. Math.floor() hàm làm tròn sô thập phân lên
    6. Math.random() hàm dam rum số  thập phân bất kỳ
    7. Math.min() hàm xuất ra số nhỏ nhất
    8. Math max() hà xuất ra số lớn nhất

    length: Độ dài của chuỗi
*/

let getRamdomItem = function(arrry) {
    return arrry[Math.floor(Math.random() * arrry.length)];

}

