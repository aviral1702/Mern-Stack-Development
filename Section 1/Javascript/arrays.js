const nums=[17,78,78,74];
console.log(nums);
console.log(nums.length);

const movies=['Openheimer','Dream Girl 2','Gadar 2','RRR','Avengers','Flash'];
console.log(movies);

//indexing
console.log(movies[2]);
console.log(movies.indexOf('Avengers'));
console.log(movies.at(-1));

//slicing
console.log(movies.slice(1,5));
console.log(movies.slice(1));
console.log(movies.slice(3,-1));

//adding elements
movies.push('Red');
console.log(movies);
movies.pop(); //to remove from end
movies.shift(); //to remove from  beginning
console.log(movies);

//remove more than 1 element from any index
movies.splice(2,2);
console.log(movies);
console.log(...movies);
console.log(['new element',...movies,'new element']);
console.log(['new element',...movies,'new element', ...nums]);
console.log([...'Aviral']);

const alpha=['a','b','c','d']
const insertElement=(arr,index,ele)=> {
    return [ ...arr.slice(0,index),ele, ...arr.slice(index)];
};
console.log(insertElement(alpha,1,'z'));
