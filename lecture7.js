let nam1="Suresh";
let nam2="Ramesh";

let mark1=30;
let mark2=20;

/*
let greater;

if(mark1>mark2){
    greater=mark1;
    console.log(nam1+" has scored highest no.:",greater)
}
else{
    greater=mark2;
    console.log(nam2+" has scored highest no.:",greater)
}
*/

// shortcut

let winnername=nam1;
let winnermarks=mark1;

if(mark2>mark1){
    winnermarks=mark2;
    winnername=nam2;
}
console.log(winnername+" has scored highest no.:",winnermarks);


// TERNARY OPERATOR :?

//EX. number is even or odd?

let num=20;

(num%2==0) ? console.log(num,"is even") : console.log(num,"is odd");
//we can use without bracket like num%2==0

let isevenorodd = (num%2==0) ? "even":"odd";
console.log(num,"is",isevenorodd)

// Check if nmber is positive or negative?

let h=-21;
(h>=0) ? console.log(h,"is positive"):console.log(h,"is negative");


//Nested ternary condtion 

//

let j=0;
(j>0) ? console.log(j,"is positive"):
    (j<0)?console.log(j,"is negative"):console.log(j,"is zero");
//here in 2nd condition false is must.

const naam1="Ramesh";
const naam2="Suresh";

let marks1=43;
let marks2=57;

(marks1>marks2) ? console.log(naam1,"scored higher",marks1):console.log(naam2,"scored higher",marks2);


// Print greater number:
let n1=1;
let n2=22;
let n3=3;

let commonString="is greater.";

(n1>n2 && n1>n3) ? console.log(n1,commonString) :
    (n2>n1 && n2>n3) ? console.log(n2,commonString):console.log(n3,commonString);

// we can find max by using Math.max()
let max=Math.max(n1,n2,n3);
console.log(max) 

// print 1-7 into weeksday

const daynum=3;

let day = (daynum==1) ? "monday":
          (daynum==2) ? "tuesday":
          (daynum==3) ? "wednesday":
          (daynum==4) ? "thursday":
          (daynum==5) ? "friday":
          (daynum==6) ? "saturday":"sunday" ;
console.log("Day",daynum,"is:",day);

//switch case 

switch(daynum){
    case 1:
        console.log("Monday");
    break; 

    case 2:
        console.log("tuesday");
    break; 

    case 3:
        console.log("wednesday");
    break;

    case 4:
        console.log("thursday");
    break; 

    case 5:
        console.log("friday");
    break;
    case 6:
        console.log("saturday");
    break;
    case 7:
        console.log("sunday");
    break;

    default:console.log("Invalid");
    break; //this will not give an error.
}

let gotMarks=87;
let grade;
switch(true){

    case gotMarks>=90:
        console.log("A");
    break;

    case gotMarks>=80:
        console.log("B");
    break;

    case gotMarks>=70:
        console.log("C");
    break;

    case gotMarks>=60:
        console.log("D");
    break;

    default:console.log("fail");


}