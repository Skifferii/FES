public class Bus extends Vehicle {
    private int capacity;

    public Bus(String number, String model, int year, int capacity) {
        super(number, model, year);
        this.capacity = capacity;
    }

    @Override
    public String toString() {
        return "Bus{" +
                super.toString() +
                " capacity = " + capacity +
                '}';
    }
    public int getCapacity() {
        return capacity;
    }

    public void drive () {
        System.out.println( getNumber() +  " ---> Drive  with " + getCapacity() + " passanger");
    }
}
