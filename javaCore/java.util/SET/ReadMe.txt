package ListInterface;
import java.util.*;
public class MapExample {
	public static void main(String[] args) {
		
		/* HASHSET */
		HashSet hSet = new HashSet();
		hSet.add("B");
	    hSet.add("A");
	    hSet.add("D");
	    hSet.add("E");
	    hSet.add("A");
	    hSet.add("X");
	    hSet.add("f");
	    System.out.println(hSet);
		/* LINKEDHASHSET */
	    LinkedHashSet lhSet = new LinkedHashSet<>(hSet);
		/* TREESET */
	    TreeSet tSet = new TreeSet<>(hSet);
	    /* Before and after add element */
	    System.out.println("HashSet before add:       " + hSet);
	    hSet.add("J");
	    System.out.println("HashSet before add:       " + hSet);
	    System.out.println("LinkedHashSet before add: " + lhSet);
	    lhSet.add("J");
	    System.out.println("LinkedHashSet before add: " + lhSet);
	    System.out.println("TreeSet before add:       " + tSet);
	    tSet.add("J");
	    System.out.println("TreeSet before add:       " + tSet);
	}
}
	