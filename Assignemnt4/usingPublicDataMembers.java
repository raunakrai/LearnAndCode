public class Person {
    public String name;
    public int age;

    public static void main(String[] args) {
        Person person = new Person();
        person.name = "Raunak";
        person.age = 22;
        System.out.println("Name: " + person.name);
        System.out.println("Age: " + person.age);
    }
}
