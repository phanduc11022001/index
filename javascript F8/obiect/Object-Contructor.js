
// Object Contructor
// trong bài này this gọi từ ông nào sẽ là ông đó


function user(firtName, lastName, avatar) {
    this.firtName = firtName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firtName} ${this.lastName}`
    }
}

var author = new user('Đức', 'Phan', 'Avatar');
var use = new user('Căn', 'Đinh', 'Avatar');

author.title = 'đừng nên yêu sớm';
use.comment = 'hãy yêu đi vì đời cho phép';

console.log(author);
console.log(use.getName());


function host(name, fullname, age) {

    this.name = name;
    this.fullname = fullname;
    this.age = age;

    this.userss = function(){
        return `${this.name} ${this.fullname}`
    }
}

var person = new host('Đức', 'Phan Bá Đức', 21);

console.log(person.userss())