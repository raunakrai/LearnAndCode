public class mathCalculatorAndStringManipulator
{
    int operandFirst;
    double operandSecond;
    String operandThird;

    public void calculateSum(int oprand1, int oprand2) 
    {
        int sum = oprand1 + oprand2;
        System.out.println("Result: " + sum);
    }

    public void convertToUpperCase(String oprand) 
    {
        operandThird = oprand.toUpperCase();
        System.out.println("Updated String: " + operandThird);
    }
}

public class Main 
{
    public static void main(String[] args) 
    {
        mathCalculatorAndStringManipulator obj = new mathCalculatorAndStringManipulator();
        obj.operandFirst = 10;
        obj.operandSecond = 20.5;
        obj.operandThird = "hello";
        obj.calculateSum(obj.operandFirst, 5);
        obj.convertToUpperCase("world");
    }
}