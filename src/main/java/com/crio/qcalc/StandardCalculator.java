package com.crio.qcalc;

public class StandardCalculator {

    protected double result;

    public void add(int a, int b) {
        long temp = (long) a + (long) b;

    if (temp > Integer.MAX_VALUE)

        throw new ArithmeticException();
        

        result = a + b;
    
    }    

    public int getResult() {

        return result;
 
    }

    public void subtract(int a, int b) {

        long temp = (long) a - (long) b;
        if(temp <Integer.MIN_VALUE)
        throw new ArithmeticException();

        result = a - b;
 
    }

    public void multiply(int a, int b) {

        result = a * b;
 
    }

    public void divide(int a, int b) {

        result = (double)a / (double)b;
 
    }

    public void setResult(int value) {

        if (value != 0)
            return;
 
        this.result = value;
 
    }
 
 
}