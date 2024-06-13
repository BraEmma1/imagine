const btn = document.getElementById("btn");
btn.onclick = function () {
    const name = prompt("Enter your full name.");
    document.getElementById("name").innerText = name;
};

//variable

const pi = 3.142;
let username = "larem";
let age = "68";
let present = false;

// objects
const person = {
    username: "larem",
    age: 68,
    present: false,
    child:{
        name:'Mickey Mouse',
        friend:{
        name:'Biggie'
      }
      }
};

console.log(person.username);
person.age = 75;
console.log(person);


//arrays
const bottle1 = {
    size: 'large',
    color:'yellow',
  }
  
  const bottle2 = {
    size:'small',
    color:'blue'
  }
  
  const bottles = [];
  bottles.push(bottle1,bottle2);//
  
  
  const date = new Date 
  date.getDay();
  
  //if Else condition
  if(age >= 20){
    'you are true'
  }
  else{
    'You are false'
  }
  
  for loop 
  
  for (let i = 0; i <= 5; i+=6
    ){
   console.log('we did it!'); 
  }
  

  //functions
//defining a function

function login ( username,password){
  // validate username and password
   if(!username || !password){
     return 'Username or password mot provided'
   }
  //verify username and password
 if(username == 'larem' && password =='1234' ){
   return 'user is logged in';
 } else{
   return 'invalid username or password '
 }
}

//invoking a function
login( 'larem');



//basic arithematric
11 +12;
1+0.5;
43 - 12
45/7
5 * 3;
14%3

Math.floor( 45/24);
45%24;
Math.random()*1000;
Math.max(34,32,37);
2* (3+4)-5/2;





//strings in JavaScript
const firstname = 'Emmanuel lartey';

//string methods
firstname.length
firstname.toUpperCase();
firstname.charAt()
firstname.slice(5,8)
firstname.split('')
firstname.replace("lartey","osei lartey");
firstname.indexOf('rt')

// string conversion
Number("3.243");
parseInt("3.243");
parseFloat("3.243")
let amount = 18000;
console.log(`GHS${amount}`)
amount.toString()
  

/ Functions
const participants = [];
function addParticipant(email){
  // Check if email was provided
  if (!email) {
    return 'No email provided'
  }
  // Check if email is valid
  if (!email.includes('@gmail.com')) {
    return 'Invalid email provided';
  }
  // Add email to participants
  participants.push(email);
    return 'Participant added';
  }

addParticipant('larem@yahoo.com');
addParticipant('lsoer@gmail.com');
addParticipant();
addParticipant('bettyafua');
participants;

// // Arrays in JavaScript
// const users = [
//   {
//     username: 'emma,
//     password: '1234',
//     email: 'emmanuelosei831@gmail.com
//     password: '12345',
//     email: 'larem@gmail.com'
//   }
// ];

// Write a function that will take a user with  firstname, lastname and return fullname;
function fullName(user) {
  return {
    ...user, 
    fullName: `${user.firstname} ${user.lastname}`
  };
     }
  
  const user = {
    firstname: 'Emma',
    lastname: 'Osei'
  }
    fullName(user);
  
  
  // Array map
  const users = [
      {firstname: 'stella', lastname: 'Odei'},
      {firstname: 'Abena', lastname: 'Yankey'},
      {firstname: 'Ama', lastname: 'Manu'},
      {firstname: 'Henry', lastname: 'Amponsah'},
      {firstname: 'Philip', lastname: 'Antwi'},
  
  ]
  // users.map(fullName);
  
  // Square of numbers
  function square(number){
    return number ** 2;
  }
  square(5);
  const numbers = [9, 8, 7, 6];
  numbers.map(square);
  
  // Write a function that takes a number. If the number is an even number, it should return "true" if it is an odd number, it should return "false".
  function isEven(number){
    return number % 2 === 0;
  }
     isEven(6);
  numbers.filter(isEven);

  // object in javaScript
const user = {
  email:'laremdetech@gmail.com',
  password:'1234'
}
function resetPassword(email, newPassword){
  //check if email and new password was provided
  if (!email || !newPassword){
    return "Email or password not provided";
  }
  //check if provided email is correct
  if(email===user.email){
    //Update password with new one
    user.password = newPassword
    return 'password reset successful'
  }
  if(email !== user.email){
    return "Invalid email"
  }
}
user
resetPassword('laremdetech@gmail', "3665")
user
  
  // You have been given an array of students with some of them marked as absent and others marked as present
//write a function that returns the total number of student present

const students = [
  {id:1, present: true},
  {id:2, present: true},
  {id:3, present: false},
  {id:4, present: true},
  {id:5, present: false},
  ]
  
  
  function totalStudent(){
    let total = 0;
    for(let i =0; i< students.length; i++){
      if (students[i].present){
        total++;
      }
    }
    return total;
  }
  
  totalStudent()
  
  //classes in javaScript
  class Laptop{
    constructor(brand, color){
      this.brand = brand;
      this.color = color;
    }
  }
  
  const laptop1 = new Laptop("Dell", "Black");
  const laptop2 = new Laptop('HP','silver');
  laptop1.brand
  laptop2.brand