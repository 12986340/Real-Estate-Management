package com.property.services;
//package com.pgmates.services;
//
//import java.util.List;
//
//import org.springframework.beans.BeanUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import com.pgmates.dtos.BookingDTO;
//import com.pgmates.exceptions.ResourceNotFoundException;
//import com.pgmates.models.Apartment;
//import com.pgmates.models.Booking;
//import com.pgmates.models.Customer;
//import com.pgmates.models.Payment;
//import com.pgmates.repository.BookingRepository;
//import com.pgmates.repository.PaymentRepository;
//
//@Service
//public class BookingService {
//
//	@Autowired private BookingRepository brepo;
//	@Autowired private PaymentRepository prepo;
//	@Autowired private CustomerService csrv;
//	@Autowired private OwnerService osrv;
//	@Autowired private ApartmentService asrv;
//
//	@Value("${ezyrent.max-in-one-apartment}")
//	private int maxsize;
//
//	public void saveBooking(BookingDTO dto) throws ResourceNotFoundException{
//		Booking bk=new Booking();
//		Payment pmt=new Payment();
//		Customer cust=csrv.findById(dto.getUserid());
//		Apartment ap=asrv.findById(dto.getApid());
//		bk.setApartment(ap);
//		bk.setCustomer(cust);
//		bk.setOwner(ap.getOwner());
//		brepo.save(bk);
//
//		BeanUtils.copyProperties(dto, pmt);
//		pmt.setCustomer(cust);
//		pmt.setRemarks("Booking Amount");
//		prepo.save(pmt);
//	}
//
//	public boolean checkBooking(int id) throws ResourceNotFoundException{
//		Booking bk=brepo.findByCustomerAndStatus(csrv.findById(id), "Booked");
//		return bk!=null;
//	}
//
//	public Booking currentBooking(int id) throws ResourceNotFoundException{
//		return brepo.findByCustomerAndStatus(csrv.findById(id), "Booked");
//	}
//
//	public List<Booking> allbookings(){
//		return brepo.findAll();
//	}
//
//	public List<Booking> apartmentbookings(int apid){
//		return brepo.findByApartmentAndStatus(asrv.findById(apid), "Booked");
//	}
//
//	public long apartmentbookingscount(Apartment apid){
//		return brepo.findByApartmentAndStatus(apid, "Booked").size();
//	}
//
//	public boolean checkAvailablity(int apid) {
//		long size=brepo.findByApartmentAndStatus(asrv.findById(apid), "Booked").size();
//		System.out.println("Size "+size+" maxsize "+maxsize);
//		return size>=maxsize;
//	}
//
//	public List<Booking> allUserbookings(int id) throws ResourceNotFoundException{
//		return brepo.findByCustomer(csrv.findById(id));
//	}
//
//	public List<Booking> allOwnerbookings(int id){
//		return brepo.findByOwnerAndStatus(osrv.findById(id),"Booked");
//	}
//
//	public List<Payment> allPayments(){
//		return prepo.findAll();
//	}
//
//	public List<Payment> allUserPayments(int id) throws ResourceNotFoundException{
//		return prepo.findByCustomer(csrv.findById(id));
//	}
//
//	public List<Payment> allOwnerPayments(int id){
//		return prepo.findOwnerPayments(id);
//	}
//
//	public Booking findByid(int id) {
//		return brepo.getReferenceById(id);
//	}
//
//	public void cancelBooking(int id) {
//		Booking bk= brepo.getReferenceById(id);
//		bk.setStatus("Left by "+bk.getCustomer().getName());
//		brepo.save(bk);
//	}
//
//
//}
