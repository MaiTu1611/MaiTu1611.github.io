package ListInterface;

import java.io.Serializable;

public class student implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 123L;
	private int id;
	private String name;
	public student(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
