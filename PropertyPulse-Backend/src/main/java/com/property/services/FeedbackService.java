package com.property.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.property.dtos.FeedbackDTO;
import com.property.exceptions.ResourceNotFoundException;
import com.property.models.Apartment;
import com.property.models.Customer;
import com.property.models.Feedback;
import com.property.repository.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired private FeedbackRepository repo;
	@Autowired private CustomerService csrv;
//	@Autowired private BookingService bsrv;

	public void saveFeedback(FeedbackDTO dto) throws ResourceNotFoundException{
		Customer cust=csrv.findById(dto.getUserid());
//		Apartment ap=bsrv.currentBooking(dto.getUserid()).getApartment();
//		System.out.println(ap);
		Feedback fb=new Feedback();
//		fb.setApartment(ap);
		fb.setCustomer(cust);
		fb.setDescr(dto.getDescr());
		repo.save(fb);
	}

	public List<Feedback> listAll(){
		return repo.findAll();
	}
}
