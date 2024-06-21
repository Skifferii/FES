public class Student implements Printable, Cloneable{

    private String name;
    private String cohort;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCohort() {
        return cohort;
    }

    public void setCohort(String cohort) {
        this.cohort = cohort;
    }

    public Student(String name, String cohort) {
        this.name = name;
        this.cohort = cohort;
    }

    @Override
    public void print(String msg) {
        System.out.println("Student:" + name+ " cohort: " + cohort);
        System.out.println(msg);
        System.out.println();



    }
    public void study (){
        System.out.println(name + " study");
    }
}
