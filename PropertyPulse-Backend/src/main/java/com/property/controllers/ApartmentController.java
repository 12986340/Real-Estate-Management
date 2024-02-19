package com.property.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.property.dtos.ApartmentDTO;
import com.property.dtos.SearchDTO;
import com.property.services.ApartmentService;

@CrossOrigin
@RestController
@RequestMapping("/api/apartments")
public class ApartmentController {

	@Autowired private ApartmentService aservice;

	@PostMapping
	public ResponseEntity<?> save(ApartmentDTO dto) {
		aservice.saveApartment(dto);
		return ResponseEntity.ok("Apartment successfully");
	}

	@GetMapping
	public ResponseEntity<?> findAll() {
		return ResponseEntity.ok(aservice.listAll());
	}

	@GetMapping("search")
	public ResponseEntity<?> searchApartments(SearchDTO dto) {
		return ResponseEntity.ok(aservice.search(dto));
	}

	@GetMapping("{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id) {
		return ResponseEntity.ok(aservice.findById(id));
	}

	@PutMapping("{id}")
	public ResponseEntity<?> activateApartment(@PathVariable("id") int id) {
		aservice.activateApartment(id);
		return ResponseEntity.ok("Activated successfully");
	}

	@DeleteMapping("{id}")
	public ResponseEntity<?> deactivateById(@PathVariable("id") int id) {
		aservice.deleteById(id);
		return ResponseEntity.ok("Deleted Successfully");
	}

	@GetMapping("owners/{id}")
	public ResponseEntity<?> findOwnersApartments(@PathVariable("id") int id) {
		return ResponseEntity.ok(aservice.listOwnerApartments(id));
	}

}
