const numbers = [1,2,3,4];

numbers.map(number=>{
    console.log(number);
});

//2.method

const newNumbers= numbers.map(number=>number+1);

console.log(newNumbers);