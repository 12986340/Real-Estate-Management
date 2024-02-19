package com.property.dtos;

import org.springframework.web.multipart.MultipartFile;

import com.property.models.Apartment;

public class ApartmentDTO extends Apartment {
	private MultipartFile pic1;
	private MultipartFile pic2;
	private MultipartFile pic3;
	private MultipartFile pic4;
	private int ownerid;

	public int getOwnerid() {
		return ownerid;
	}
	public void setOwnerid(int ownerid) {
		this.ownerid = ownerid;
	}
	public MultipartFile getPic1() {
		return pic1;
	}
	public void setPic1(MultipartFile pic1) {
		this.pic1 = pic1;
	}
	public MultipartFile getPic2() {
		return pic2;
	}
	public void setPic2(MultipartFile pic2) {
		this.pic2 = pic2;
	}
	public MultipartFile getPic3() {
		return pic3;
	}
	public void setPic3(MultipartFile pic3) {
		this.pic3 = pic3;
	}
	public MultipartFile getPic4() {
		return pic4;
	}
	public void setPic4(MultipartFile pic4) {
		this.pic4 = pic4;
	}


}
