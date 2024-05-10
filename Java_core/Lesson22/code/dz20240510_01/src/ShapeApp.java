import java.util.List;
import java.util.ArrayList;

public class ShapeApp {
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle(20.0));
        shapes.add(new Circle(7.5));
        shapes.add(new Square(10.0));
        shapes.add(new Square(1.5));
        shapes.add(new Rectangle(8.0, 3.0));
        shapes.add(new Rectangle(3.0, 6.0));


        /*for (int i = 0; i < shapes.size(); i++) {
            System.out.println(shapes.get(i));
        }*/

        for (Shape shape : shapes) {
            System.out.println(shape);
        }
        System.out.println("____________________________________");
        Shape largestShape = getLargestShape(shapes);
        System.out.println("The largest shape is " + largestShape.getClass().getSimpleName() + " with area " + largestShape.calcArea());
        System.out.println("____________________________________");
        System.out.println(getShapesLargeThat(shapes, 90));
        System.out.println("____________________________________");
        System.out.println("____________________________________");


    }

    public static Shape getLargestShape(List<Shape> shapes) {
        if (shapes == null || shapes.isEmpty()) {
            return null;
        }
        Shape largestShape = shapes.get(0);
        for (Shape shape : shapes) {
            if (shape.calcArea() > largestShape.calcArea()) {
                largestShape = shape;
            }
        }

        return largestShape;
    }


    public static List<Shape> getShapesLargeThat(List<Shape> shapes, double area) {
        List<Shape> result = new ArrayList<>();
        for (Shape shape : shapes) {
            if (shape.calcArea() > area) {
                result.add(shape);
            }
        }
        return result;
    }


}