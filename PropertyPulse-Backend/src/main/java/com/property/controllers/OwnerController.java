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

import com.property.dtos.OwnerDTO;
import com.property.services.OwnerService;

@CrossOrigin
@RestController
@RequestMapping("/api/owners")
public class OwnerController {

	@Autowired private OwnerService oservice;

	@PostMapping
	public ResponseEntity<?> save(OwnerDTO dto) {
		if(oservice.checkExist(dto.getUserid())) {
			return ResponseEntity.badRequest().body("Email already registered");
		}
		oservice.saveOwner(dto);
		return ResponseEntity.ok("Owner registered successfully");
	}

	@GetMapping
	public ResponseEntity<?> findAll() {
		return ResponseEntity.ok(oservice.listAll());
	}

	@GetMapping("{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id) {
		return ResponseEntity.ok(oservice.findById(id));
	}

	@PutMapping("{id}")
	public ResponseEntity<?> updateStatus(@PathVariable("id") int id) {
		oservice.updateStatus(id);
		return ResponseEntity.ok("Owner status updated");
	}
}
