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
  
//wirte

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
resetPassword('laremdetech@gmail')
user