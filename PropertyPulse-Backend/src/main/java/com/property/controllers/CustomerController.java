package com.property.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.property.dtos.CustomerDTO;
import com.property.services.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

	@Autowired private CustomerService cservice;

	//create user
	@PostMapping
	public ResponseEntity<?> save(CustomerDTO dto) {
		if(cservice.checkExist(dto.getUserid())) {
			return ResponseEntity.badRequest().body("Email already registered");
		}
		cservice.saveCustomer(dto);
		return ResponseEntity.ok("user registered successfully");
	}

	//get all user
	@GetMapping
	public ResponseEntity<?> findAll() {
		return ResponseEntity.ok(cservice.listAll());
	}

	//get single user
	@GetMapping("{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id) {
		return ResponseEntity.ok(cservice.findById(id));

//		Customer cust =cservice.findById(id);
//		try {
//			return ResponseEntity.ok(cservice.findById(id));
//		} catch (Exception e) {
//			// TODO: handle exception
//			throw new  ResourceNotFoundException("hiiii");
//		}
//		if(cust!=null) {
//			return ResponseEntity.ok(cust);
//		}else {
//			return ResponseEntity.ok("hiii");
//		}

	}

	//update user
	@PutMapping("{id}")
	public ResponseEntity<?> updateStatus(@PathVariable("id") int id) {
		cservice.updateStatus(id);
		return ResponseEntity.ok("User status updated");
	}
}
