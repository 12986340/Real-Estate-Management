package com.property.models;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String descr;
	private LocalDate createdon;
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Customer customer;
	@ManyToOne
	@JoinColumn(name="apartment_id")
	private Apartment apartment;

	public Feedback() {
		this.createdon=LocalDate.now();
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public LocalDate getCreatedon() {
		return createdon;
	}
	public void setCreatedon(LocalDate createdon) {
		this.createdon = createdon;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Apartment getApartment() {
		return apartment;
	}
	public void setApartment(Apartment apartment) {
		this.apartment = apartment;
	}


}
