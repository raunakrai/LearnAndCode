public class Person {
    private String name;
    private int age;

    public Person name(String name) {
        this.name = name;
        return this;
    }

    public Person age(int age) {
        this.age = age;
        return this;
    }

    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public static void main(String[] args) {
        Person person = new Person().name("Raunak").age(22);
        person.display();
    }
}
