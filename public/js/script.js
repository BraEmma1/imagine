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

addParticipant('bettyafuaantwi@yahoo.com');
addParticipant('lizzie@gmail.com');
addParticipant();
addParticipant('bettyafua');
participants;

// // Arrays in JavaScript
// const users = [
//   {
//     username: 'Tilopsiii',
//     password: '1234',
//     email: 'bettyafuaantwi
//     password: '12345',
//     email: 'lizzie@gmail.com'
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
    firstname: 'Elizabeth',
    lastname: 'Odei'
  }
    fullName(user);
  
  
  // Array map
  const users = [
      {firstname: 'Elizabeth', lastname: 'Odei'},
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
  
