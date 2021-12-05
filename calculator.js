console.log("welcome to js");

var calculator ={
    'num1':parseInt(prompt("enter the number")),
    'num2':parseInt(prompt("enter the number")),
    'sum':function(){
        res=this.num1 + this.num2;
        console.log(res);
    },
    'substract':function(){
        res=this.num1 - this.num2;
        console.log(res);
    },
    'multiplication':function(){
        res=this.num1 * this.num2;
        console.log(res);
    },
    'devide':function(){
        res=this.num1 / this.num2;
        console.log(res);
    }

};

var res=calculator.sum();
console.log(res);

var res=calculator.substract();
console.log(res);

var res=calculator.multiplication();
console.log(res);

var res=calculator.devide();
console.log(res);

