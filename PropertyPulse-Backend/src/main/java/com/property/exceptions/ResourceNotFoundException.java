package com.property.exceptions;


public class ResourceNotFoundException extends RuntimeException {
	String resourceName;
	String fieldName;
	long fieldValue;


	public ResourceNotFoundException(String resourceName, String fieldName, long fieldValue) {
		super(String.format("%s not found with %s : %s", resourceName, fieldName, fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}


	public String getResourceName() {
		return resourceName;
	}


	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}


	public String getFieldName() {
		return fieldName;
	}


	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}


	public long getFieldValue() {
		return fieldValue;
	}


	public void setFieldValue(long fieldValue) {
		this.fieldValue = fieldValue;
	}


//
//	public String getMessage() {
//		// TODO Auto-generated method stub
//		return null;
//	}


}

//public class ResourceNotFoundException extends RuntimeException {
//
//	/**
//	 *
//	 */
//	private static final long serialVersionUID = 5151888015030397897L;
//
//	public ResourceNotFoundException(String message) {
//		super(message);
//		// TODO Auto-generated constructor stub
//	}

//}
