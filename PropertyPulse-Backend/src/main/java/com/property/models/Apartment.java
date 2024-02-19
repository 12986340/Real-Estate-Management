package com.property.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Apartment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String address;
	private String city;
	private String state;
	//private int lightbill;
	private String flattype;
	private String extra;
	private int rent;
	private String parking;
	private String balcony;
	//private String gender;
	private String furnishtype;
	private String facing;
	private String buildingIs;
	private String propertyFor;
	private double builtupArea;
	//private int totalbeds;
	
	
	private String photo1;
	private String photo2;
	private String photo3;
	private String photo4;
	private boolean isactive;
	@ManyToOne
	@JoinColumn(name="owner_id")
	private Owner owner;

	public Apartment() {
		this.isactive=true;
	}

	public boolean isIsactive() {
		return isactive;
	}
	public void setIsactive(boolean isactive) {
		this.isactive = isactive;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}

	public String getFlattype() {
		return flattype;
	}
	public void setFlattype(String flattype) {
		this.flattype = flattype;
	}
	public String getExtra() {
		return extra;
	}
	public void setExtra(String extra) {
		this.extra = extra;
	}
	public int getRent() {
		return rent;
	}
	public void setRent(int rent) {
		this.rent = rent;
	}
	
	public String getFurnishtype() {
		return furnishtype;
	}
	public void setFurnishtype(String furnishtype) {
		this.furnishtype = furnishtype;
	}
	public String getPhoto1() {
		return photo1;
	}
	public void setPhoto1(String photo1) {
		this.photo1 = photo1;
	}
	public String getPhoto2() {
		return photo2;
	}
	public void setPhoto2(String photo2) {
		this.photo2 = photo2;
	}
	public String getPhoto3() {
		return photo3;
	}
	public void setPhoto3(String photo3) {
		this.photo3 = photo3;
	}
	public String getPhoto4() {
		return photo4;
	}
	public void setPhoto4(String photo4) {
		this.photo4 = photo4;
	}
	public Owner getOwner() {
		return owner;
	}
	public void setOwner(Owner owner) {
		this.owner = owner;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getParking() {
		return parking;
	}

	public void setParking(String parking) {
		this.parking = parking;
	}

	public String getBalcony() {
		return balcony;
	}

	public void setBalcony(String balcony) {
		this.balcony = balcony;
	}

	public String getFacing() {
		return facing;
	}

	public void setFacing(String facing) {
		this.facing = facing;
	}

	public String getBiuldingIs() {
		return buildingIs;
	}

	public void setBiuldingIs(String biuldingIs) {
		this.buildingIs = biuldingIs;
	}

	public String getPropertyFor() {
		return propertyFor;
	}

	public void setPropertyFor(String propertyFor) {
		this.propertyFor = propertyFor;
	}

	public double getBuiltupArea() {
		return builtupArea;
	}

	public void setBuiltupArea(double builtupArea) {
		this.builtupArea = builtupArea;
	}

	@Override
	public String toString() {
		return "Apartment [id=" + id + ", name=" + name + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", flattype=" + flattype + ", extra=" + extra + ", rent=" + rent + ", parking=" + parking
				+ ", balcony=" + balcony + ", furnishtype=" + furnishtype + ", facing=" + facing + ", buildingIs="
				+ buildingIs + ", propertyFor=" + propertyFor + ", builtupArea=" + builtupArea + ", photo1=" + photo1
				+ ", photo2=" + photo2 + ", photo3=" + photo3 + ", photo4=" + photo4 + ", isactive=" + isactive
				+ ", owner=" + owner + "]";
	}
	


}
