public class mathCalculatorAndStringManipulator 
{
    int value;
    double pointValue;
    String text;

    public void calculateAndPrintSum(int oprand1, int oprand2) 
    {
        int sum = oprand1 + oprand2;
        System.out.println("Result: " + sum);
    }

    public void convertAndPrintToUpperCase(String oprand) 
    {
        text = oprand.toUpperCase();
        System.out.println("Updated String: " + text);
    }
}

public class Main {
    public static void main(String[] args) {
        mathCalculatorAndStringManipulator obj = new mathCalculatorAndStringManipulator();
        obj.value = 10;
        obj.pointValue = 20.5;
        obj.text = "hello";
        obj.calculateAndPrintSum(obj.a, 5);
        obj.convertAndPrintToUpperCase("world");
    }
}