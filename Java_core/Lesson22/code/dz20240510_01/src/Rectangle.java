class Rectangle extends Shape {
    private double sideA;
    private double sideB;
    private double area ;
    private boolean isCalculeted = false;

    public Rectangle(double sideA, double sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
        area = sideA * sideB;
    }

    @Override
    public String toString() {

        if (sideA == sideB) {
            return "Square{" +
                    "side=" + sideA +
                    '}';
        } else {


            return "Rectangle{" +
                    "length=" + sideA +
                    ", width=" + sideB + " " + super.toString() +
                    '}';
        }
    }
    @Override
    public double calcArea() {
        return area;
    }
}