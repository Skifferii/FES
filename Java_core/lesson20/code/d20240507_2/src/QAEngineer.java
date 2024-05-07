public class QAEngineer {
    private String name;
    private double salaray;

    public QAEngineer (String name, double salaray) {
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
        System.out.println("i'm engineer " + name +". I engineering ");
    }

    public void salary () {
        System.out.println(name + " get the salary " + salaray);
    }

    public String getName() {
        return name;
    }
}
