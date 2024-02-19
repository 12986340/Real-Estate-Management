package com.property.dtos;

public class ForgotPasswordDTO {
	private String userid;
	private String question;
	private String answer;
	private String pwd;
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
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
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	@Override
	public String toString() {
		return "ForgotPasswordDTO [userid=" + userid + ", question=" + question + ", answer=" + answer + ", pwd=" + pwd
				+ "]";
	}


}
