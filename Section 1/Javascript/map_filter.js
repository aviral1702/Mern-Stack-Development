const nums=[34,8,9,35,36,29,61];
const evens=nums.filter( (n) => {
    return n%2===0
})
console.log(evens);

//wap to filter prices between 500 to 2000
const prices=[345,8726,238,20,1002,400,799,1400];
const price_filter=prices.filter( (n) => {
    return (n>500 && n<2000)
})
console.log(price_filter);

const nums2=[4,8,9,4,1,7,3];
const result= nums2.map( (n) => { return n**2});
console.log(result);

const price2=['$56.28','$882.99','$78.66','$9.234']
//print integer format without dollar sign
const result2=price2.map((n)=>{ return parseInt(n.slice(1))});
console.log(result2);

const names=['Dhruv Chaurasia','Aviral Chandra','Piyush Katyal'];
//print only first name
const result3=names.map((n)=>{ return n.split(' ')[0]});
console.log(result3);


