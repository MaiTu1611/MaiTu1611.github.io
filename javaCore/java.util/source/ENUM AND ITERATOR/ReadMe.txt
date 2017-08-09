package ListInterface;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
public class MapExample {
	public static void main(String[] args) throws ParseException {
		/* VECTOR EXAMPLE */
		Vector<Double> v = new Vector<Double>(11, 3);
		System.out.println("Elements : " + v.size());
		System.out.println("Capacity : " + v.capacity());
		v.setSize(100);
		System.out.println("Elements after setSize: " + v.size());
		System.out.println("Capacity after setSize: " + v.capacity());
		v.removeAll(v);
		v.add(new Double("198.98"));
		v.add(new Double("19.98"));
		v.add(new Double("18"));
		v.add(new Double("19.9"));
		v.add(new Double("1958.98"));
		v.add(new Double("98.98"));
		System.out.println("Elements before trim: " + v.size());
		System.out.println("Capacity before trim: " + v.capacity());
		v.trimToSize();
		System.out.println("Elements after trim: " + v.size());
		System.out.println("Capacity after trim: " + v.capacity());
		v.add(new Double("999"));
		System.out.println("Elements after add 1 element: " + v.size());
		System.out.println("Capacity after add 1 elemant: " + v.capacity());
		
		/* Iterator */
		System.out.print("Converse Vector to Iterator: ");
		Iterator<Double> it = v.iterator();
		while(it.hasNext()) {
			System.out.print(it.next() + " ");
		}
		/* Enum */
		System.out.println();
		System.out.print("Converse Vector to Enum: ");
		Enumeration<Double> e = v.elements();
		while(e.hasMoreElements()) {
			System.out.print(e.nextElement() + " ");
		}
		
	}
}
	