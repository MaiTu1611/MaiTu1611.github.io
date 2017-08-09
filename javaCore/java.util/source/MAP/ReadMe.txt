package ListInterface;
import java.io.ObjectOutputStream.PutField;
import java.util.*;
public class Example {
	public static void main(String[] args) {
		
	 	/* HASHMAP */
		// Create new hash map
		HashMap hm = new HashMap();
		// add element to hashmap
		hm.put("TMT", new Double(1389.89));
		hm.put("TMT1", new Double(567.89));
		hm.put("TMT2", new Double(1359.89));
		hm.put("TMT3", new Double(149.89));
		// converse to set = entrySet() to 
		Set set = hm.entrySet();
		System.out.println(set);
		// converse to iterator to browse through the entrie table
		Iterator iterator = set.iterator();
		// Browse though the entrie table
		while(iterator.hasNext()) {
			Map.Entry me = (Map.Entry)iterator.next();
			System.out.println(me.getKey() + ":" + me.getValue());
		}
		// clone hm to hm2 to see defferent
		HashMap hm2 = (HashMap) hm.clone();
		System.out.println("HashMap hm2 clone from hm before hm change: " + hm2);
		// add 1000 to key TMT1, then println console
		double temp = (Double)hm.get("TMT1");
		hm.put("TMT1", new Double(temp + 1000));
		System.out.println("HashMap hm after change: " + hm);
		
		
	   	/* TREE MAP */
		TreeMap tm = new TreeMap<>();
		tm.put("TMT5", new Double(1389.89));
		tm.put("TMT1", new Double(567.89));
		tm.put("TMT6", new Double(1359.89));
		tm.put("TMT3", new Double(149.89));
		System.out.println("TreeMap element: " + tm);
		// converse to SET
		Set set1 = tm.entrySet();
		System.out.println("SET element: " + set1);
		// converse to Iterator
		Iterator it = set1.iterator();
		// browse though the entrie table
		while(it.hasNext()) {
			Map.Entry me = (Map.Entry) it.next();
			System.out.println(me.getKey() + " : " + me.getValue());
		}
		// Create new HashMap from TreeMap putAll()
		HashMap hm3 = new HashMap();
		hm3.putAll(tm);
		System.out.println(hm3);
		
		/* LINKEDHASHMAP */
		LinkedHashMap lhm = new LinkedHashMap<>();
		lhm.putAll(hm);
		System.out.println("LinkedHashMap create from HashMap hm : " + lhm);
		lhm.put("TMT19", new Double(19879));
		System.out.println("LinkedHashMap after add key TMT19" + lhm);
		hm.put("TMT19", new Double(19879));
		System.out.println("HashMap after add key TMT19" +hm);
	}
}
	