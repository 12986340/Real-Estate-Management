package com.property.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.dtos.CustomerDTO;
import com.property.dtos.ForgotPasswordDTO;
import com.property.dtos.LoginDTO;
import com.property.exceptions.ResourceNotFoundException;
import com.property.models.Customer;
import com.property.repository.CustomerRepository;
import com.property.utils.StorageService;

@Service
public class CustomerService {

	@Autowired private CustomerRepository crepo;
	@Autowired private StorageService storageService;
	@Autowired private AdminService asrv;

	public void saveCustomer(CustomerDTO dto) {
		Customer customer=new Customer();
		BeanUtils.copyProperties(dto, customer);
		String picname=storageService.store(dto.getPhoto());
		customer.setUidphoto(picname);
		customer.setPwd(asrv.encrypt(dto.getPwd()));
		crepo.save(customer);
	}

	public boolean validate(ForgotPasswordDTO dto) {
		if(crepo.findByUserid(dto.getUserid())!=null) {
			Customer admin=crepo.findByUserid(dto.getUserid());
			if(admin.getQuestion().equals(dto.getQuestion()) && admin.getAnswer().equals(dto.getAnswer()))
				return true;
			else
				return false;
		}else {
			return false;
		}
	}

	public void updatePassword(ForgotPasswordDTO dto) {
		Customer admin=crepo.findByUserid(dto.getUserid());
		admin.setPwd(asrv.encrypt(dto.getPwd()));
		crepo.save(admin);
	}

	public List<Customer> listAll(){
		return crepo.findAll();
	}

	public boolean checkExist(String userid) {
		return crepo.findByUserid(userid)!=null;
	}

	public Customer findByUserId(String userid) {
		return crepo.findByUserid(userid);
//		if(cust!=null) {
//			return cust;
//		}else {
//			throw new ResourceNotFoundException("user not found with id : "+userid);
//		}
	}

	public Customer findById(int id) {
		return crepo.getReferenceById(id);
//		if(cust!=null) {
//			return cust;
//		}else {
//			throw new ResourceNotFoundException("user not found with id : "+id);
//		}
	}

	public void updateStatus(int id) {
		Customer owner= crepo.getReferenceById(id);
		owner.setActive(!owner.isActive());
		crepo.save(owner);
	}

	public Customer validate(LoginDTO dto) throws ResourceNotFoundException{
		Customer cust=findByUserId(dto.getUserid());
		if(cust!=null && cust.getPwd().equals(asrv.encrypt(dto.getPwd())) ) {
			return cust;
		}else {
			return null;
		}
	}
}
