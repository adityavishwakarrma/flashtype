package com.crio.qcalc;

 import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
          
		System.out.println("Hello world!");

		
		// SpringApplication.run(DemoApplication.class, args);

        System.out.println("Starting QCalc..");

       StandardCalculator calc = new StandardCalculator();

        calc.add(1, 2);
       


       System.out.println(calc.getResult());

       calc.subtract(1, 2);

       System.out.println(calc.getResult());

	}

}
