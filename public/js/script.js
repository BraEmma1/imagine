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

45/5
14%3

'2' + 2
  
