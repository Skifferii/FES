class Circle extends Shape {
    private double radius;
    private double area=0;
    private boolean isCalculeted = false;

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
        if (!isCalculeted){
            area = (Math.PI * radius * radius);
            isCalculeted = true;
        }
        return area;
    }
}