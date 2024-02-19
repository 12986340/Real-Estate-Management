package com.property.dtos;

public class MailSenderDTO {

	private String subject;
	private String message;
	private int userid;
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	@Override
	public String toString() {
		return "MailSenderDTO [subject=" + subject + ", message=" + message + ", userid=" + userid + "]";
	}



}
