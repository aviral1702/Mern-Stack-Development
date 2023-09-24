//WAP to take an array of names and filter all names having characters more than 6.
const names = [
  "Aviral",
  "Rishika",
  "Aman",
  "Kartik",
  "Aryan",
  "Muskaan",
  "Divyansh",
];
const new_name = names.filter((i) => {
  return i.length > 6;
});
console.log(new_name);
console.log("");

// WAP to print all prime numbers in range of 100 - 2000
for (let i = 100; i <= 2000; i++) {
  let c = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      c++;
    }
  }
  if (c === 0) {
    console.log(i);
  }
}
console.log("");

// WAP to print Fibonacci series.
let n=10
let a=0
let b=1
const fibonacci=[]
fibonacci.push(a)
fibonacci.push(b)
for (let i=2;i<n;i++){
    c=a+b
    fibonacci.push(c)
    a=b
    b=c
}
console.log(fibonacci);
console.log("");

// WAP to print pyramid pattern.
for(let i=1;i<=10;i++){
  process.stdout.write(' '.repeat(10-i));
  process.stdout.write(' *'.repeat(i));
  console.log();
}
