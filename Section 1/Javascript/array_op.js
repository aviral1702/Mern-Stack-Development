const nums=[3,56,23,8,23,98];

//wap to print all number in array

// 1st way - using traditional for loop
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
console.log('');

//wap to print all even number in array
for(let i=0;i<nums.length;i++){
    if (nums[i]%2===0){
    console.log(nums[i]);
    }
}
console.log('');

// 2nd way - using for of loop
for(let n of nums){
    console.log(n);
}
console.log('');

for(let n of nums){
    if (n%2==0){
    console.log(n);
    }
}
console.log('');

// 3rd way - using for each function
nums.forEach( (n)=> {
    if (n%2===0){
        console.log(n);
    }
})
console.log('');

//wap to print square of all number in array
for(let i=0;i<nums.length;i++){
    console.log(nums[i]*nums[i]);
}
console.log('');

//creating new array
const newNums=[];
for (let a of nums){
    newNums.push(a)
}
console.log(newNums);
