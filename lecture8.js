//*Loops
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");



//*Issues in repeating code
// to much work for developer
// chances of error

 
let num = 1;
while (num <= 10) {   
    console.log(num);
    num++;
}

// printing even numbers up to 26
// start from 2 since it's the first even number
let even = 2;   
while (even <= 26) {
    console.log(even);
    even += 2;   
}
//Tme complexity O(26)


// printing from 10 down to 0
let num1 = 10;
while (num1 >0) {
    console.log(num1);
    num1--;   
}
//Tme complexity O(10)


//for loops
for(let i=0;i<10;i++)
{
    console.log("hii");
}
//Tme complexity O(10)


// steps inside for loop 
// * initilize the value of variable
// * check the conditions
// * executes th line of code inside the for loop
// * Increaments the value


//ex.
//Print counting from 1 to 10

for(let a=1;a<=10;a++)
{
    console.log(a);
}
//Tme complexity O(10)



// print multiples of 3 only upto 50

for (let num = 3; num <= 50; num += 3)
     {
         console.log(num);
     }
  //Tme complexity O(50/3) 
  
// Ex.
// Print the square of each number from 20 to 35
let n=35;
for(let a=20;a<=n;a++)
{
    console.log(a*n)
    //console.log(a**2)
}
// Time complexity O(n) -->[(Start + n) - Start]

//Ex.
// print table of 5

let m=10
for (let i = 1; i <= m; i++) 
{
   console.log("5 x " + i +" = "+ (5 * i));
}
//Time complexity O(10)

//* find sum of first 100 numbers and print it 

let sum=0;
for(i=1;i<=100;i++)
{
   sum+=i;       // sum=1+2+3+4
}
console.log(sum)

//Conditions related extra things
//** Read about short circuiting 

let  =23;
const n1 = false && 5;             // && = A=B=C =True
const n2 = n1 == false;
const n3 = n2 && 67;
const n4 = true && n2 !=34 && 45 && n1 == false;

console.log(n4);


