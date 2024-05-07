public class Manager {
    private String name;
    private double salaray;
    private double bonus;

    public Manager(String name, double salaray, double bonus) {
        this.name = name;
        this.salaray = salaray;
        this.bonus = bonus;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "name='" + name + '\'' +
                ", salaray=" + salaray +
                ", bonus=" + bonus +
                '}';
    }



    public void salary () {
        System.out.println(name + " get the salary " + salaray + " bonus " +bonus);
    }
    public void work(){
        System.out.println("i'm manager " + name +". I kick all employees ");
    }

    public String getName() {
        return name;
    }
}


