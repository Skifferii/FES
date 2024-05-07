public class Programmer {
    private String name;
    private double salaray;

    public Programmer(String name, double salaray) {
        this.name = name;
        this.salaray = salaray;
    }

    @Override
    public String toString() {
        return "Programmer{" +
                "name='" + name + '\'' +
                ", salaray=" + salaray +
                '}';
    }
    public void work(){
        System.out.println("i'm programer " + name +". I write code ");
    }

    public void salary () {
        System.out.println(name + " get the salary " + salaray);
    }

    public String getName() {
        return name;
    }
}
