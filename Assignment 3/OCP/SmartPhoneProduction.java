public class SmartPhoneProduction implements DeviceFactory{
    @Override
    public Device createDevice(){
        return new Smartphone();
    }
}