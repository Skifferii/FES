import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("______");

        List<Vehicle> list = new ArrayList<>();
        list.add(new Car( "AA0001AA", "Audi", 2016));
        list.add(new Car( "AA0002AA", "Volvo", 2020));
        list.add(new Truck( "BB0003AA", "Scania", 2020,20));
        list.add(new Truck( "BB0004AA", "Mercedes", 2020,25));
        list.add(new Bus( "BB0005AA", "Man", 2023,45));
       // list.add(new Vehicle( "Vehicle", "Vehicle", 2023)); //????????


        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
            list.get(i).drive();
        }



    }
}