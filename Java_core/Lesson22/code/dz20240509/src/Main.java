import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle(5.0));
        shapes.add(new Square(4.0));
        shapes.add(new Rectangle(3.0, 6.0));
        shapes.add(new Circle(7.0));

        double totalArea = calculateTotalArea(shapes);
        System.out.println("Total area of all shapes: " + totalArea);

        Shape largestShape = findLargestShape(shapes);
        System.out.println("Shape with largest area: " + largestShape.getClass().getSimpleName() + " with area " + largestShape.calculateArea());

        double threshold = 50.0;
        List<Shape> largeShapes = findShapesWithAreaGreaterThan(shapes, threshold);
        System.out.println("Shapes with area greater than " + threshold + ":");
        for (Shape shape : largeShapes) {
            System.out.println(shape.getClass().getSimpleName() + " with area " + shape.calculateArea());
        }
    }

    public static double calculateTotalArea(List<Shape> shapes) {
        double totalArea = 0.0;
        for (int i = 0; i < shapes.size(); i++) {
            totalArea += shapes.get(i).calculateArea();
        }
        return totalArea;
    }

    public static Shape findLargestShape(List<Shape> shapes) {
        Shape largestShape = null;
        double maxArea = Double.MIN_VALUE;
        for (int i = 0; i < shapes.size(); i++) {
            double area = shapes.get(i).calculateArea();
            if (area > maxArea) {
                maxArea = area;
                largestShape = shapes.get(i);
            }
        }
        return largestShape;
    }

    public static List<Shape> findShapesWithAreaGreaterThan(List<Shape> shapes, double threshold) {
        List<Shape> largeShapes = new ArrayList<>();
        for (int i = 0; i < shapes.size(); i++) {
            if (shapes.get(i).calculateArea() > threshold) {
                largeShapes.add(shapes.get(i));
            }
        }
        return largeShapes;
    }
}