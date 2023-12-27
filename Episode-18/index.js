console.log('Namaste Javascript');
//What is Higher order Function ?
// A function which takes another function as an argument or returns a function from it is known as Higher order Function.

function x(){
    console.log("Namaste");
}

function y(x){
    x();

}

const radius=[2,4,6,8];

const area= function(radius) {
    return Math.PI*radius*radius;
};

const Circumference= function(radius) {
    return 2*Math.PI*radius;
};

const Diameter= function(radius) {
    return 2*radius;
};

const Calculate = function (radius, logic){
    const output=[]
    for(let i=0;i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
 };
 console.log(Calculate(radius,area));
 console.log(Calculate(radius,Circumference));
 console.log(Calculate(radius,Diameter));
// Here function y is higher order Function and Function x is a callback Function.


// Write a JS program which calculates Area, Circumference and Diameter of a circle


 
 const CalculateArea = function (radius){
    const output=[]
    for(let i=0;i<radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
 };
 console.log(CalculateArea(radius));
 
 const CalculateCircumference = function (radius){
    const output=[]
    for(let i=0;i<radius.length; i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
 };
 console.log(CalculateCircumference(radius));

 const CalculateDiameter = function (radius){
    const output=[]
    for(let i=0;i<radius.length; i++){
        output.push(2*radius[i]);
    }
    return output;
 };
 console.log(CalculateDiameter(radius));