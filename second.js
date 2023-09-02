//-------------------------Functions---------------------------//

let add = function(num1 , num2){

    return num1 + num2;
}

let sum = add;

let result = sum(10 , 10);

console.log(result);
console.log(add);
console.log(sum);

console.log('\n');
//-------------------------Functions---------------------------//




//---------------------Arrow Functions---------------------------//

//no need to use the function keyword
// =>

let add_1_2 = (num_1 , num_2) => num_1 + num_2 ;
//No need of Function keyword and return and also the curly brackets because
//there is only one statement

(n1 , n2) =>{

    console.log("hello world!");
    console.log(n1 + n2);
    return 1;
}

console.log(add_1_2(100 , 300));

console.log(add(100 , 300));

console.log('\n');

//---------------------Arrow Functions---------------------------//




//--------------------------Methods---------------------------//

//Behaviour for an object is called a Method

let laptop = {
    cpu  : 'i7 ',
    ram  : 16 , 
    
    output : function(){
        console.log('This is my Laptop');
    }
}  

laptop.output();

console.log('\n');

//--------------------------Methods---------------------------//




//------------------------This Keyword------------------------//

//Call an object inside a function

laptop = {
    cpu  : 'i9 ',
    ram  : 16 , 
    
    output : function(){
        console.log(this.cpu);
    }
}  

laptop.output();
console.log('\n');

//------------------------This Keyword------------------------//




//------------------------Constructors------------------------//

function mySelf(name , age){

    this.myName = name;
    this.myAge  = age ;

    this.address = function(){
        console.log("Pasyala");
    }
}

let man_1 = new mySelf('Shehan' , 23);
let man_2 = new mySelf('Malinda', 24);

console.log(man_1);

console.log('\n');

console.log(man_2);

man_1.address();

console.log('\n');

//------------------------Constructors------------------------//




//--------------------------Arrays------------------------//

let array = [];

console.log(array);

array.push(4);
array.push(3);
array.push(1);
array.push(2);

console.log(array);

console.log(array[0]);
console.log(array[3]);

console.log('\n');

//js arrays can contain different kind of data types

let data = [ "Shehan" , 5  , {
    name : 'Jayasooriya',
    age  : 25
} , function (){
   console.log("Hello world!"); 
} ]

console.log(data[0]);
data[3]();

console.log('\n');

let array_2 = [1,2,3,4,5,6,7,8,9,10];

array_2.push(20);
console.log(array_2);
console.log('\n');

console.log(array_2.pop());
console.log(array_2);
console.log('\n');

array_2.shift();        //Shift the First element
console.log(array_2);
console.log('\n');

array_2.unshift(100);   //Add element to Front
console.log(array_2);
console.log('\n');

array_2.splice(4 , 2 , 250 , 300);
console.log(array_2);
console.log('\n');

//--------------------------Arrays------------------------//




//-----------------------For of Loop------------------------//

let nums = [];

nums[0]  = 5; 
nums[99] = 10;

console.log(nums);    //98 empty items

for(let n of nums){
    console.log(n);
}

console.log('\n');

for(let key in nums){
    console.log(key);
}

console.log('\n');

//-----------------------For of Loop------------------------//




//-------------------Destructuring an Array -------------------//

let arr = [4,5,6,7,8];

 [a,b,c,d] = arr;

 console.log(b);

 console.log('\n');

 //swap two numbers using destructuring
 let aa = 10;
 let bb = 20;

[aa,bb] = [bb,aa];

console.log(aa,bb);

console.log('\n');

let words = "My name is Shehan Malinda Jayasooriya".split(' '); 
//Splitted by Space.....

[a,b, ,...d] = words;   //from ... print the remaining string parts after the d
//c is not mentioned and we cannot access to 'is' string
console.log('\n');

console.log(d);
console.log('\n');

console.log(words);
console.log('\n');

//-------------------Destructuring an Array -------------------//




//----------------------forEach Method-------------------//

let arrrrr = [1,2,3,4,5,6,7,8];

arrrrr.forEach((n,i,arrrrr) => {   //arrow function
    console.log(n,i,arrrrr);
});

console.log('\n');

arrrrr.forEach((n,i,arrrrr) => {    //Multiply by 2
    console.log(n*2);
}); 

console.log('\n');

//----------------------forEach Method-------------------//



