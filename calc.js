'use strict'

var Calculator = function() {
  this.firstOperand = "";
  this.secondOperand = "";
  this.total = 0;
  this.operators = [];
}

Calculator.prototype.setTotal = function () {
  var total;
  var last = this.lastOperator();
  var first = this.firstOperand;
  var second = this.secondOperand;
  switch (last) {
  case "+":
    total = Number(first) + Number(second);
    break;
  case "-":
    total = Number(first) - Number(second);
    break;
  case "*":
    total = Number(first) * Number(second);
    break;
  case "/":
    total = Number(first) / Number(second);
    break;
  default:
    console.log("something has gone wrong. Here is the state: ");
    console.log(this);
    total = total;
  }
  this.total = total;
}

Calculator.prototype.getTotal = function () {
  return this.total;
}

Calculator.prototype.lastOperator = function () {
  var last;
  if (this.operators.length > 0) {
    last = this.operators[this.operators.length - 1];
  } else {
    throw "No operators at this time."
  }
  return last;
}

Calculator.prototype.setOperator = function (op) {
  this.operators.push(op)
  // this.operators = this.operators.concat([op])
}

Calculator.prototype.setFirstOperand = function (str) {
  var strOfNum = str;
  this.firstOperand += strOfNum;
}

Calculator.prototype.setSecondOperand = function (str) {
  var strOfNum = str;
  this.secondOperand += strOfNum;
}

Calculator.prototype.negateOperand = function(operand) {
  //function takes the operand as input and
  // returns the negated value of that operand
  switch (operand) {
  case 1:
    this.firstOperand = negater(this.firstOperand);
    break;
  case 2:
    this.secondOperand = negater(this.secondOperand);
    break;
  default:
    console.log("Incorrect argument to negateOperand?");
    console.log("negateOperand() takes an integer (1 or 2) corresponding two the first or second operand being negated.");
  }
}

const negater = (str) => {
  var firstChar = str.split('')[0];
  if (!(firstChar == "-")) {
    str = "-" + str;
  } else {
    str = str.slice(1);
  }
  return str
}

module.exports = Calculator;
