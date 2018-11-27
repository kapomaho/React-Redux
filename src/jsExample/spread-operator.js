const data =[1,2,3,4,5];

console.log(...data);  //data içerisindeki elemanlar

const newData= [0,...data];

console.log(newData);

const datas ={

    name:'kapo',
    surname:'maho'
}

const newDatas={
    age: 25,
    ...datas
}

console.log(newDatas);