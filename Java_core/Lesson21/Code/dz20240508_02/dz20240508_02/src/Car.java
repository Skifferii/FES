public final class Car extends Vehicle{

    public Car(String number, String model, int year) {
        super(number, model, year);
    }

    @Override
    public String toString() {
        return "Car{" + super.toString() + "}";
    }
}
