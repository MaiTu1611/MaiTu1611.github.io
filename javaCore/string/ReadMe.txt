package ListInterface;
import java.io.*;
public class MapExample {
	public static void main(String[] args) throws ClassNotFoundException, IOException {
		String st = "testString";
		String st2 = new String("testString");
		// == and equal
		System.out.println("String literal vs String Object == :" + st==st2);
		System.out.println("String literal vs String Object equals :" + st.equals(st2));
		System.out.println("String length : " + st2.length());
		System.out.println("String concat st and st2 :" + st.concat(st2));
		System.out.println("String indexOf S in st: " + st.indexOf("S") );
		/* StringBuffer and StringBuilder */
		StringBuffer sBf = new StringBuffer("testStringBuffer");
		// test append
		System.out.println("StringBuffer append : " + sBf.append(" append"));
		// test insert
		System.out.println("StringBuffer insert 0 : " + sBf.insert(0,"insert "));
		// test replace
		System.out.println("StringBuffer replace 0->3 : " + sBf.replace(0, 3, "replace"));
		// test delete
		System.out.println("StringBuffer delete begin length -> length-3 : " + sBf.delete(sBf.length()-3, sBf.length()));
		// test revese
		System.out.println("StringBuffer revese : " + sBf.reverse());
		// test capacity (oldcapacity*2)+2
		System.out.println("StringBuffer capacity : " + sBf.capacity());
		// test length
		System.out.println("StringBuffer length : " + sBf.length());
		// test trim
		sBf.trimToSize();
		System.out.println("StringBuffer after trim : " + sBf.capacity());
	}
}
	