package com.property.models;
//package com.pgmates.models;
//
//import java.time.LocalDate;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//
//@Entity
//public class Payment {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//	private String cardno;
//	private String nameoncard;
//	private int amount;
//	private String remarks;
//	private LocalDate pmtdate;
//	@ManyToOne
//	@JoinColumn(name="customer_id")
//	private Customer customer;
//
//
//	public String getRemarks() {
//		return remarks;
//	}
//
//	public void setRemarks(String remarks) {
//		this.remarks = remarks;
//	}
//
//	public Payment() {
//		this.pmtdate=LocalDate.now();
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getCardno() {
//		return cardno;
//	}
//
//	public void setCardno(String cardno) {
//		this.cardno = cardno;
//	}
//
//	public String getNameoncard() {
//		return nameoncard;
//	}
//
//	public void setNameoncard(String nameoncard) {
//		this.nameoncard = nameoncard;
//	}
//
//	public int getAmount() {
//		return amount;
//	}
//
//	public void setAmount(int amount) {
//		this.amount = amount;
//	}
//
//	public LocalDate getPmtdate() {
//		return pmtdate;
//	}
//
//	public void setPmtdate(LocalDate pmtdate) {
//		this.pmtdate = pmtdate;
//	}
//
//	public Customer getCustomer() {
//		return customer;
//	}
//
//	public void setCustomer(Customer customer) {
//		this.customer = customer;
//	}
//
//	@Override
//	public String toString() {
//		return "Payment [id=" + id + ", cardno=" + cardno + ", nameoncard=" + nameoncard + ", amount=" + amount
//				+ ", pmtdate=" + pmtdate + ", customer=" + customer + "]";
//	}
//
//}
