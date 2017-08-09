package ListInterface;
import java.util.*;
public class MapExample {
	public static void main(String[] args) {
		
		/* ARRAYLIST */
		List li = new ArrayList<>();
		for (int i = 0; i < 100; i++) {
			li.add("TMT" + i);
		}
		// add TMT19 to last array
		li.add("TMT19");
		System.out.println("First element in Arraylist: " + li.get(0));
		System.out.println("Last element in Arraylist: " + li.get(li.size()-1));
		System.out.println("Index First of element in Arraylist: " + li.indexOf("TMT19"));
		System.out.println("Index Last of element in Arraylist: " + li.lastIndexOf("TMT19"));
		// create Iterator demo
		Iterator it = li.iterator();
		// create new LinkedList from ArrayList
		LinkedList lli = new LinkedList(li);
		while (it.hasNext()) {
			Object temp = it.next();
			System.out.println(temp);
			//lli.add(temp);// add element of arrayList to LinkedList
		}
		// add all element of ArrayList to LinkedList
		lli.addAll(li);
		// remove element 27
		lli.remove(19);
		System.out.println(lli);
		System.out.println("First element in Linkedlist: " + lli.getFirst());
		System.out.println("Last element in Linkedlist: " + lli.getLast());
		
	}
}
	