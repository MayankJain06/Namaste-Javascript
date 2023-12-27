arr2=[5,10,15,20,25];

function double (x) {
    return x*2;
};

function triple (x) {
    return x*3;
};
// Higher order function Map in javascript
const output=arr2.map(triple);
console.log(output);

const outputs=arr2.map(double);
console.log(outputs);

const output1=arr2.map(function binary (x) {
    return x.toString(2);
});
console.log(output1);

const output2=arr2.map((x)=> x.toString(2));

console.log(output2);



////Filter function in Javascript


const arr1=[1,2,3,4,5];

function isEven(x){
return x%2===0
}

function isOdd(x){
    return x%2
}

function greaterThan4(x){
        return x>4
}
const output3 =arr1.filter(isEven);
console.log(output3);

const output4 =arr1.filter(isOdd);
console.log(output4);

const output5 =arr1.filter(greaterThan4);
console.log(output5);

// We can directly pass functions as an argument
const output6 =arr1.filter(function greaterThan4(x){
    return x>4
    });
console.log(output6);

// Arrow Functions Passed as an argument
const output7 =arr1.filter( x => x>4);
console.log(output7);


////// Reduce Higher order Functions 

// Find sum inside an array
const arr5=[1,2,3,4,5];

function sum(arr5){
    let sum=0;
    for(let i=0; i<arr5.length; i++){
        sum=sum+arr5[i];
    }
    return sum;
}

console.log(sum(arr5));


const output8=arr5.reduce( function(acc, curr){
acc=acc+curr;
return acc;
},0);
console.log(output8);


// Find max inside an array

const arr6=[1,2,3,4,5];

function findMax(arr6){
    let max=0;
    for(let i=0; i<arr6.length; i++){
        if(arr6[i]>max){
            max=arr6[i];
        }
    }
    return max;
}

console.log(findMax(arr6));

const output9=arr5.reduce( function(max, curr){
    max=max+curr;
    return max;
    },0);
    console.log(output9);
