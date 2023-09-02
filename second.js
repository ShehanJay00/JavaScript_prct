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