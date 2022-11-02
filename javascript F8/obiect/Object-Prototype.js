/*

    Object prototype(nguyên mẫu) -(nguyên mẫu để tao nên 1 đối tượng) Bassic

    1.Prototype là gì?
    2.Sử dụng khi nào?

*/

function user(firtName, lastName, Avatar) {

    this.firtName = firtName;
    this.lastName = lastName;
    this.Avatar = Avatar;
}

user.prototype.className = 'chúng ta cùng  cố gắng';
user.prototype.getClassName = function () {
    return this.className;
}

var author = new user('Phan', 'Đức', 'Avatar');
var use = new user('Căn', 'Đinh', 'Avatar');

console.log(author);
console.log(use.className);
