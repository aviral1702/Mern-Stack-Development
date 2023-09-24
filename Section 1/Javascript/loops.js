// for (let i=0;i<10;i++){
//     console.log(i)
// }

// print 100 to 1 with gap of 10
for(let i=100;i>0;i-=10){
    console.log(i)
}

//print pattern
for (let i=1; i<=10; i++){
    for (let j=1; j<=i; j++){
        process.stdout.write('*')
    }
    console.log();
}

//print pattern
for (let i=1; i<=10; i++){
    console.log('*'.repeat(i));
}

//perfect square
let num=25
let sqrt=num**0.5
if(sqrt%1==0){
    console.log('perfect square')
}

//perfect square from 1 to 100
for (let i=1;i<=100;i++){
    sqrt=i**0.5
    if(sqrt%1==0){
        console.log(i);
    }
}


//reverse of a no.
let num1=1702
let rev=0
while(num1>0){
    let d=num1%10;
    rev=rev*10 +d
    num1=parseInt(num1/10)
}
console.log(rev);


