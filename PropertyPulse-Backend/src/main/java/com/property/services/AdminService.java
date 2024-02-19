package com.property.services;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.dtos.ForgotPasswordDTO;
import com.property.models.Admin;
import com.property.repository.AdminRepository;



@Service
public class AdminService {
	@Autowired AdminRepository dao;

	public void saveAdmin(Admin admin) {
		dao.save(admin);
	}

	public Admin validate(String userid, String pwd) {
		// TODO Auto-generated method stub
		Optional<Admin> admin=dao.findById(userid);
		if(admin.isPresent() && admin.get().getPwd().equals(encrypt(pwd))) {
			return admin.get();
		}
		return null;
	}

	public boolean validate(ForgotPasswordDTO dto) {
		if(dao.existsById(dto.getUserid())) {
			Admin admin=dao.getReferenceById(dto.getUserid());
			if(admin.getQuestion().equals(dto.getQuestion()) && admin.getAnswer().equals(dto.getAnswer()))
				return true;
			else
				return false;
		}else {
			return false;
		}
	}

	public void updatePassword(ForgotPasswordDTO dto) {
		Admin admin=dao.getReferenceById(dto.getUserid());
		admin.setPwd(dto.getPwd());
		dao.save(admin);
	}

	public void updateAdmin(Admin admin) {
		if(admin.getPwd().equals("") || admin.getPwd()==null) {
			admin.setPwd(dao.getReferenceById(admin.getUserid()).getPwd());
		}
		dao.save(admin);
	}

	public long countAdmin() {
		// TODO Auto-generated method stub
		return dao.count();
	}

	public String encrypt(String text) {


		  try {

	            // Static getInstance method is called with hashing MD5
	            MessageDigest md = MessageDigest.getInstance("MD5");

	            // digest() method is called to calculate message digest
	            // of an input digest() return array of byte
	            byte[] messageDigest = md.digest(text.getBytes());

	            // Convert byte array into signum representation
	            BigInteger no = new BigInteger(1, messageDigest);

	            // Convert message digest into hex value
	            String hashtext = no.toString(16);
	            while (hashtext.length() < 32) {
	                hashtext = "0" + hashtext;
	            }
	            return hashtext;
	        }

	        // For specifying wrong message digest algorithms
	        catch (NoSuchAlgorithmException e) {
	            throw new RuntimeException(e);
	        }

//		try {
//		MessageDigest messageDigest = MessageDigest.getInstance("MD5");
//		byte[] md=messageDigest.digest();
//		BigInteger bi=new BigInteger(1,md);
//		return bi.toString(16);
//		}catch(Exception ex) {
//			System.err.println("Error "+ex.getMessage());
//		}
		//return  null;
		//return text;
	}
}
