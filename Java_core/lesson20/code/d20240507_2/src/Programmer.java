public class Programmer extends Employee {

    public Programmer(String name, double salaray) {
        super (name,salaray);
    }

    @Override
    public String toString() {
        return "Programmer{" +
                "name='" + getName() + '\'' +
                ", salaray=" + getSalaray() +
                '}';
    }
    public void work(){
        System.out.println("i'm programer " + getName() +". I write code ");
    }



}
