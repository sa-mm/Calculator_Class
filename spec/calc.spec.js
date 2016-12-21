var Calculator = require('../calc.js');

describe('Calculator', function() {
  var calc;

  beforeEach(function() {
    calc = new Calculator();
  });

  it('a new calculator has a total equal to 0, no operands, and no operators', function() {
    expect(calc.getTotal()).toEqual(0);
    expect(calc.firstOperand).toEqual("");
    expect(calc.secondOperand).toEqual("");
    expect(calc.operators).toEqual([]);
  });

  it('summing 1 and 2 yields correct result', function() {
    calc.setFirstOperand("1");
    calc.setSecondOperand("2");
    calc.setOperator("+");
    calc.setTotal();
    var expectedTotal = 3;
    expect(calc.getTotal()).toEqual(expectedTotal);
  });
  
  it('subtracting 2 from 1 yields -1', function() {
    calc.setFirstOperand("1");
    calc.setSecondOperand("2");
    calc.setOperator("-");
    calc.setTotal();
    var expectedTotal = -1;
    expect(calc.getTotal()).toEqual(expectedTotal);
  });
  
  it('multiplying two single digit numbers works', function () {
    calc.setFirstOperand("2");
    calc.setSecondOperand("3");
    calc.setOperator("*");
    calc.setTotal();
    var expectedTotal = 6;
    expect(calc.getTotal()).toEqual(expectedTotal);
  });
  
  it('dividing two single digit numbers yields correct result', function () {
    calc.setFirstOperand("6");
    calc.setSecondOperand("2");
    calc.setOperator("/");
    calc.setTotal();
    var expectedTotal = 3;
    expect(calc.getTotal()).toEqual(expectedTotal);
  });
  
  it('adding multi-digit numbers yields correct result', function () {
    calc.setFirstOperand("1");
    calc.setFirstOperand("2");
    calc.setSecondOperand("3");
    calc.setSecondOperand("3");
    calc.setOperator("+");
    calc.setTotal();
    var expectedTotal = 12 + 33;
    expect(calc.getTotal()).toEqual(expectedTotal);
  });
  
  it('dividing multi-digit numbers yields correct result', function () {
    calc.setFirstOperand("1");
    calc.setFirstOperand("2");
    calc.setSecondOperand("3");
    calc.setSecondOperand("3");
    calc.setOperator("/");
    calc.setTotal();
    var expectedTotal = 12 / 33;
    expect(calc.getTotal()).toEqual(expectedTotal);
  });
  
  it('can negate an operand of firstOperand', function () {
    calc.setFirstOperand("1");
    calc.setFirstOperand("1");
    calc.negateOperand(1);
    var expectedOperand = "-11";
    expect(calc.firstOperand).toEqual(expectedOperand);
  });
  
  it('can negate a negated operand of firstOperand', function () {
    calc.setFirstOperand("-1");
    calc.setFirstOperand("1");
    calc.negateOperand(1);
    var expectedOperand = "11";
    expect(calc.firstOperand).toEqual(expectedOperand);
  });
  
  it('can negate a negated operand of secondOperand', function () {
    calc.setSecondOperand("-1");
    calc.setSecondOperand("1");
    calc.negateOperand(2);
    var expectedOperand = "11";
    expect(calc.secondOperand).toEqual(expectedOperand);
  });
});
