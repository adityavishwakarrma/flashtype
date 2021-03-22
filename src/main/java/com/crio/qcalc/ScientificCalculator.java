package com.crio.qcalc;
import java.lang.Math;
 

public class ScientificCalculator extends StandardCalculator {

   public void add(double a,double b )
   {
       this.result = a+b;
   }

    @Override
    public void add(int a, int b)
    {
        this.add((double)a , (double)b);
    }

    


    public void pow(double a, double b)
    {
        this.result = pow(a, b);
    }
}