package com.property.controllers;
//package com.pgmates.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.pgmates.dtos.BookingDTO;
//import com.pgmates.exceptions.ResourceNotFoundException;
//import com.pgmates.services.BookingService;
//
//@CrossOrigin
//@RestController
//@RequestMapping("/api/bookings")
//public class BookingController {
//
//	@Autowired private BookingService bservice;
//
//	@PostMapping
//	public ResponseEntity<?> save(@RequestBody BookingDTO dto) throws ResourceNotFoundException{
//		//check for existing
//		if(bservice.checkBooking(dto.getUserid())) {
//			return ResponseEntity.badRequest().body("You already booked some apartment");
//		}
//		if(bservice.checkAvailablity(dto.getApid())) {
//			return ResponseEntity.badRequest().body("The apartment is full now");
//		}
//		bservice.saveBooking(dto);
//		return ResponseEntity.ok("Booked successfully");
//	}
//
//	@GetMapping
//	public ResponseEntity<?> findAll() {
//		return ResponseEntity.ok(bservice.allbookings());
//	}
//
//	@GetMapping("{id}")
//	public ResponseEntity<?> findById(@PathVariable("id") int id) {
//		return ResponseEntity.ok(bservice.findByid(id));
//	}
//
//	@GetMapping("cancel/{id}")
//	public ResponseEntity<?> cancelBookingById(@PathVariable("id") int id) {
//		bservice.cancelBooking(id);
//		return ResponseEntity.ok("Cancelled successfully");
//	}
//
//	@GetMapping("history/{id}")
//	public ResponseEntity<?> findCustomerBookingHistory(@PathVariable("id") int id) throws ResourceNotFoundException{
//		return ResponseEntity.ok(bservice.allUserbookings(id));
//	}
//
//	@GetMapping("apartments/{id}")
//	public ResponseEntity<?> findApartmentBooking(@PathVariable("id") int id) {
//		return ResponseEntity.ok(bservice.apartmentbookings(id));
//	}
//
//	@GetMapping("owners/{id}")
//	public ResponseEntity<?> findOwnersBooking(@PathVariable("id") int id) {
//		return ResponseEntity.ok(bservice.allOwnerbookings(id));
//	}
//
//	@GetMapping("payments/{id}")
//	public ResponseEntity<?> findOwnersPayments(@PathVariable("id") int id) {
//		return ResponseEntity.ok(bservice.allOwnerPayments(id));
//	}
//}
