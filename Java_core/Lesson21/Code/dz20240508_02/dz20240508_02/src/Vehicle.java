public abstract class Vehicle {

    private String number;
    /*private String brand;*/
    private String model;
    private int year;


    public Vehicle(String number, String model, int year) {
        this.number = number;
        this.model = model;
        this.year = year;
    }

    @Override
    public String toString() {
        return   " number = '" + number + '\'' +
                ", model = '" + model + '\'' +
                ", year = " + year;
    }

    public String getNumber() {
        return number;
    }

    public void drive () {
        System.out.println( getNumber() +  " ---> Drive ");
    }
}
