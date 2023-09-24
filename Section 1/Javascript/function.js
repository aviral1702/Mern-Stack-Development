function addNums(a,b){
    var c=a+b;
    console.log(c);
}
addNums(34,90)
// console.log(c);

const getpercent=function(m1,m2,m3,m4=50){
    let percent=((m1+m2+m3+m4)/400)*100
    console.log(percent+'%')
    return percent
}
getpercent(90,78,84)
let percentage=getpercent(90,78,84)

//Arrow function
const fact=(n)=> {
    let f=1
    for (let i=2;i<=n;i++){
        f=f*i
    }
    return f
}
let ans=fact(6)
console.log(ans);

//check prime
let num=23
let c=0
for(let i=2;i<num;i++){
    if(num%i==0){
        c++
    }
}
if (c==0){
    console.log('prime');
}
else{
    console.log('not prime');
}

//check palindrome
function palin(n){
    let temp=n
    let rev=0
    while(n>0){
        let rem=n%10
        rev=rev*10 + rem
        n=parseInt(n/10)
    }
    if (rev==temp){
        console.log('palindrome');
    }
    else{
        console.log('not palindrome');

    }
}
palin(121)

//sum of perfect sq from 10 to 100
let sum=0
for (let i=10;i<=100;i++){
    sqrt=i**0.5
    if(sqrt%1==0){
        sum=sum+i;
    }
}
console.log(sum);