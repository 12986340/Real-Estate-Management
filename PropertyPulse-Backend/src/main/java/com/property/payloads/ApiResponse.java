package com.property.payloads;

import java.time.LocalDateTime;

public class ApiResponse {
	private LocalDateTime timeStamp;
	private String message;
	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public ApiResponse(LocalDateTime timeStamp, String message) {
		super();
		this.timeStamp = timeStamp;
		this.message = message;
	}
	public ApiResponse(String string) {
		super();
		// TODO Auto-generated constructor stub
	}


//	private String message;
//	private boolean success;

//	public String getMessage() {
//		return message;
//	}
//
//	public void setMessage(String message) {
//		this.message = message;
//	}
//
//	public boolean isSuccess() {
//		return success;
//	}
//
//	public void setSuccess(boolean success) {
//		this.success = success;
//	}
//
//	public ApiResponse(String message, boolean success) {
//		super();
//		this.message = message;
//		this.success = success;
//	}
//
//	public ApiResponse() {
//		super();
//		// TODO Auto-generated constructor stub
//	}

}
