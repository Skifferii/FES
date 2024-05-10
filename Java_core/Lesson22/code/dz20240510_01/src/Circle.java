class Circle extends Shape {
    private double radius;

    public Circle(double radius) {

        this.radius = radius;
    }

    @Override
    public String toString() {
        return "Circle{" +
                "radius=" + radius + " " + super.toString() +
                '}';
    }

    @Override
    public double calcArea() {

        return Math.PI * radius * radius;
    }
}