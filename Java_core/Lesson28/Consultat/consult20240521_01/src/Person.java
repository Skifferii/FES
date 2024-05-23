public class Person {
    String first_Name;
    String last_Name;
    int Age;

    public Person(int age, String last_Name, String first_Name) {
        Age = age;
        this.last_Name = last_Name;
        this.first_Name = first_Name;
    }

    public String getFirst_Name() {
        return first_Name;
    }

    public String getLast_Name() {
        return last_Name;
    }

    public int getAge() {
        return Age;
    }

    @Override
    public String toString() {
        return "Person{" +
                "first_Name='" + first_Name + '\'' +
                ", last_Name='" + last_Name + '\'' +
                ", Age=" + Age +
                '}';
    }
}
