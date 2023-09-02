console.log("Hello World!")

console.log(2 + 2)


//----------------------------------------------------//
//We can use let keyword to declare a variable.....   let num = 10
num = 10
console.log(num + 10)

userName   = 'Shehan' 
userName_2 = "Jayasooroya"
console.log(userName)
console.log(userName_2)

num = 1
console.log(num + 10)
//----------------------------------------------------//



 
//----------------------------------------------------//
const pi = 3.14
radius   = 7
area     = 0

area = pi * radius * radius
console.log(area)
//----------------------------------------------------//




//-----------------------Data Types-----------------------------//
//primitive Type - boolean , number , string , null , symboll
//Objective Type 

 num  = 10
 my_name = "Malinda" 

 console.log(typeof my_name)  //How to check the Variable Type

 num1 = 0xff      //hexadecimal
 num2 = 1.5e12    //Exponential
 console.log(num1 + " and " + num2)
 console.log(num1 , "and" , num2)

 num3 = 5/0
 console.log(num3)    //Infinity
//-----------------------Data Types-----------------------------//




//-----------------Type Conversion Coercion--------------------//

num = String(6)
console.log(num , typeof num)

num = Number("123")
console.log(num , typeof num)

console.log("\n")

console.log(Boolean(10))
console.log(Boolean(0))   //only 0 is False

console.log("\n")

x = parseInt("1234 Malinda")    //Convert String into Number
console.log(x)

y = Number("1234 Malinda")
console.log(y)                  //NaN - Not a Number

console.log("\n")
//-----------------Type Conversion Coercion--------------------//




//---------------------Arithmetic Operators---------------------//

result = Math.pow(4,3)
console.log(result) 

result  = 4**3
console.log(result) 

num1 = true    // 1
num2 = false   // 0
console.log(num1 + num2)
console.log("\n")

//---------------------Arithmetic Operators---------------------//




//---------------------Relational Operators---------------------//

x = "Pen"
y = "Book"
data =  x > y
console.log(data)
console.log("\n")

//double Equal and Triple Equal

x = "4"
y =  4
result = x == y    //Double Equal Check only the Data not the Data type
console.log(result)


x = "4"
y =  4
result = x === y    //Triple Equal Check the Data and also the Data type
console.log(result)
console.log("\n")

//---------------------Relational Operators---------------------//




//----------------------Ternary Operators---------------------//

num = 8;
let result_0;

if(num % 2 === 0){
    result = "Even";
}

else{
    result = "odd";
}
console.log(result);
  
console.log("\n")

result = num % 2 === 0 ? "Even" : "Odd"

console.log(result);
console.log("\n")

//----------------------Ternary Operators---------------------//




//----------------------Template Literal---------------------//

num1 = 10; 
num2 = 30;

result = num1 + num2;

console.log(" The Addition of " + num1 + " and " + num2 + " is " + result);

console.log(`The Addition of ${num1} and ${num2} is ${result} `)

console.log(`My name is Shehan
Jayasooriya`);

console.log("\n")

//----------------------Template Literal---------------------//


//While loop check for the condition and execute the code
//DO while loop execute the code once and check for the conditions


//----------------------------Objects---------------------------//

let Malinda = {    //Objects of the Malinda

    name : 'Shehan Malinda Jayasooriya',
    age  :  22,
    home : 'Gampaha',
    schl : "Bandaranayake College Gampaha",
    cmps : "KDU"
}

console.log(Malinda);
console.log(Malinda.schl);
console.log(Malinda["name"]);
console.log(Malinda['schl']);

let input = 'schl';

console.log(Malinda.input);
console.log(Malinda[input]);  //This method is important for theese kind of things
console.log("\n")

//----------------------------Objects---------------------------//




//-------------------------Complex Objects---------------------------//

//Objects inside an Object
console.log(Malinda.schl?.length); //Is the name2 available , if its available its normal
//Otherwise it's output the Undifined and not giving an error

delete Malinda.age;
console.log(Malinda);

console.log("\n")

//-------------------------Complex Objects---------------------------//




//--------------------------For-In Loop---------------------------//
for(let key in Malinda){

    console.log(key , Malinda[key]);
}
//--------------------------For-In Loop---------------------------//




//-------------------------Functions---------------------------//

function first_func(userName){

    return(`Hello ${userName}`)
}

console.log(first_func('Jayasooriya'));
 
console.log("\n")

//-------------------------Functions---------------------------//




