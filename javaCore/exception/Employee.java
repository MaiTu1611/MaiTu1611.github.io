package ListInterface;

import java.io.Serializable;

public class Employee implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private String name;
	private String regency;
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
	public String getRegency() {
		return regency;
	}
	public void setRegency(String regency) {
		this.regency = regency;
	}
	public Employee(int id, String name, String regency) {
		super();
		this.id = id;
		this.name = name;
		this.regency = regency;
	}
}
