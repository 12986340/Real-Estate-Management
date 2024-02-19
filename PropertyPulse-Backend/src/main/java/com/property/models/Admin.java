package com.property.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin {

	@Id
	private String userid;
	private String pwd;
	private String uname;
	private String question;
	private String answer;

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
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	@Override
	public String toString() {
		return "Admin [userid=" + userid + ", pwd=" + pwd + ", uname=" + uname + "]";
	}

}
