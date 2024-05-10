public class Manager  extends Employee {

    private double bonus;

    public Manager(String name, double salaray, double bonus) {
        super (name,salaray);
        this.bonus = bonus;
    }

    @Override
    public String toString() {
        return "Manager{"  + super.toString() +'}';
    }


    @Override
    public void salary () {
        System.out.println(getName() + " get the salary " + getSalaray() + " bonus " +bonus);
    }
    public void work(){
        System.out.println("i'm manager " + getName() +". I kick all employees ");
    }


}


