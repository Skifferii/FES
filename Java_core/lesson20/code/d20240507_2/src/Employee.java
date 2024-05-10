public abstract class Employee {
    private String name;
    private double salaray;

    public Employee(String name, double salaray) {
        this.name = name;
        this.salaray = salaray;
    }

    public String getName() {
        return name;
    }

    public double getSalaray() {
        return salaray;
    }

    public void salary () {
        System.out.println(name + " get the salary " + salaray);
    }

    public abstract void work();
}
