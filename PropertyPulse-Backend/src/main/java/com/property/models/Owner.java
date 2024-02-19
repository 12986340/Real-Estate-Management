package com.property.models;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Owner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String phone;
	private String gender;
	private String address;
	private String question;
	private String answer;
	private String lightbill;
	private String uidphoto;
	private String userid;
	private String pwd;
	private boolean active;
	private LocalDateTime createdon;

	public Owner() {
		this.createdon=LocalDateTime.now();
		this.active=false;
	}

	public String getPwd() {
		return pwd;
	}


	public void setPwd(String pwd) {
		this.pwd = pwd;
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


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getQuestion() {
		return question;
	}


	public void setQuestion(String question) {
		this.question = question;
	}


	public String getAnswer() {
		return answer;
	}


	public void setAnswer(String answer) {
		this.answer = answer;
	}


	public String getLightbill() {
		return lightbill;
	}


	public void setLightbill(String lightbill) {
		this.lightbill = lightbill;
	}


	public String getUidphoto() {
		return uidphoto;
	}


	public void setUidphoto(String uidphoto) {
		this.uidphoto = uidphoto;
	}


	public String getUserid() {
		return userid;
	}


	public void setUserid(String userid) {
		this.userid = userid;
	}


	public boolean isActive() {
		return active;
	}


	public void setActive(boolean active) {
		this.active = active;
	}


	public LocalDateTime getCreatedon() {
		return createdon;
	}


	public void setCreatedon(LocalDateTime createdon) {
		this.createdon = createdon;
	}


	@Override
	public String toString() {
		return "Owner [id=" + id + ", name=" + name + ", phone=" + phone + ", gender=" + gender + ", address=" + address
				+ ", question=" + question + ", answer=" + answer + ", lightbill=" + lightbill + ", uidphoto="
				+ uidphoto + ", userid=" + userid + ", active=" + active + ", createdon=" + createdon + "]";
	}


}
