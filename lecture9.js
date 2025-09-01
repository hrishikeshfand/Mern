//Factorial 
let n= 10;
let fact = 1;
for(i=0;i<=n;i++)
    fact*=i;
{
    console.log({fact});
}

//Number is prime or not

let n1=29;
let divisorcount=0;

    for(i=1;i<=n1;i++)
    {
        if(n1 % i == 0)
        divisorcount ++;
    }
const message =(divisorcount > 2)? "Non prime number":"Prime numner";

console.log(message);

// ===============================BREAK KEYWORD =============================//

// Print no from 100 to 200 , stop a number divisible by 17 comes it stop immediately
const divisor =17;
for(let i=100;i<=200;i++)
{
    if(i % divisor == 0)
    {
        break;
    }
    console.log(i);
}

// Print the square of all nos expect nos divisible by 17 from 1 to 100

for(let i=1;i<=100;i++)
 {
  if (i % divisor == 0)
    continue;
     
    console.log(i ** 2); 
    
 }

 //Print all odd numbers from 1 to 100 that are divisible by 5

 for(let i=1;i<=100;i++)
 {
    if(i % 2 !== 0 && i % 5 === 0)

    console.log(i);
 }

 //Print first 10 odd numbers from 1 to 200 that are divisible by 5
let count = 0;

for (let i = 1; i <= 200; i++) 
    {
  if (i % 2 !== 0 && i % 5 === 0)
     {  
    console.log(i);
    count++;
    if (count === 11)
    {
      break; 
    }
  }
}

// ============================Nested Loops==========================

// writ a program to print '*'
let N=10;
let starstring="";
for(let i=0;i<=N;i++)
    starstring +="*";
console.log(starstring);

//Write a program to print 10 lines of (10 "*" in one line)

for (let i = 0; i < 10; i++)
     {
        let starstring = "";
     for (let j = 0; j < 10; j++) 
        {
          starstring += "*";
       }
  console.log(starstring);
}

//print below pattern
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6

for (let i = 1; i <= 6; i++)
     {
        let row = "";
          for (let j = 1; j <= 6; j++) 
         {
            row += j + " ";
         }
  console.log(row);
}

//A..
// ******
// *****
// ****
// ***
// **

//========================== Do-While Loop =============
//--First execuate the statement inside do block , then check for conditions inside while

do {
    console.log("Hii,I am do while loop !!");
} while (false); 