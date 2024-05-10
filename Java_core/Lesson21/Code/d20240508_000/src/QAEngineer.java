import static java.lang.Character.getName;

public class QAEngineer  extends Employee {

    public QAEngineer (String name, double salaray) {
        super (name,salaray);
    }

    @Override
    public String toString() {
        return "QAEngineer{" + super.toString() +'}';
    }
    public void work(){
        System.out.println("i'm engineer " + getName() +". I engineering ");
    }




}
