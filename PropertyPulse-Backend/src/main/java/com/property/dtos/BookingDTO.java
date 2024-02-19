package com.property.dtos;

public class BookingDTO {

	private int userid;
	private int apid;
	private String cardno;
	private String nameoncard;
	private int amount;
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public int getApid() {
		return apid;
	}
	public void setApid(int apid) {
		this.apid = apid;
	}
	public String getCardno() {
		return cardno;
	}
	public void setCardno(String cardno) {
		this.cardno = cardno;
	}
	public String getNameoncard() {
		return nameoncard;
	}
	public void setNameoncard(String nameoncard) {
		this.nameoncard = nameoncard;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}

}
