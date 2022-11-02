
// Object in javascript
 
// this chỉ đến myInfo
    var  emailKey = 'email' 
 
 var myInfo = {
    name: 'Phan Duc',
    age: 21,
    address: 'ninh binh',
    [emailKey]: 'phanduc11022001@gmail.con',
    getName: function() {
        return this.name;
    }
 };
 
var myKey = 'age';

// Function --> Phương Thức (method)
// Other --> Thuộc Tính (property)

 console.log(myInfo.getName());


 var emailkai = 'email'
 var fullName = {
    name: 'đức',
    user: 'Phan Bá Đức',
    age: '21',
    [emailkai]: 'phanduc11022001@gmail',
    address: 'nho quan ninh bình',

    getaddress: function(){

        return this.address;
    }

 };

 console.log(fullName.getaddress())