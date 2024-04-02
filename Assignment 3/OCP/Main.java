public class Main {
    public static void main(String[] args) {
        DeviceFactory smartphoneProduction = new SmartPhoneProduction();
        DeviceFactory laptopProduction = new LaptopProduction();
        Device smartphone = smartphoneProduction.createDevice();
        Device laptop = laptopProduction.createDevice();
        smartphone.displayDetails();
        laptop.displayDetails();
    }
}