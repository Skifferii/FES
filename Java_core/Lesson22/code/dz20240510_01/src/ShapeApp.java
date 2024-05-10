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
        shapes.add(new Circle(2));


        /*for (int i = 0; i < shapes.size(); i++) {
            System.out.println(shapes.get(i));
        }*/

        ShapeUtil.print(shapes);
        System.out.println("____________________________________");
        Shape largestShape = ShapeUtil.getLargestShape(shapes);
        System.out.println("The largest shape is " + largestShape.getClass().getSimpleName() + " with area " + largestShape.calcArea());
        System.out.println("____________________________________");
        System.out.println(ShapeUtil.getShapesLargeThat(shapes, 90));
        System.out.println("____________________________________");
        System.out.println("____________________________________");


    }




}