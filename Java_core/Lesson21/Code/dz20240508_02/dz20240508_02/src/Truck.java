public class Truck extends Vehicle {
    private int capacity;

    public Truck(String number, String model, int year, int capacity) {
        super(number, model, year);
        this.capacity = capacity;
    }

    @Override
    public String toString() {
        return "truck{ " +
                super.toString() +
                " capacity = " + capacity +
                '}';
    }

    public int getCapacity() {
        return capacity;
    }

    public void drive () {
        super.drive();
        System.out.println("                   with " + getCapacity() + " tonn's");
    }
}
