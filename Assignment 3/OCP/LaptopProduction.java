public class LaptopProduction implements DeviceFactory{
    @Override
    public Device createDevice(){
        return new Laptop();
    }
}