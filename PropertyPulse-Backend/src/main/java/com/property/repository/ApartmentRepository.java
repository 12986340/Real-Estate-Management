package com.property.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.property.models.Apartment;
import com.property.models.Owner;

@Repository
public interface ApartmentRepository extends JpaRepository<Apartment, Integer> {

	List<Apartment> findByIsactive(boolean isactive);

	List<Apartment> findByOwner(Owner owner);

	List<Apartment> findByCityAndIsactive(String city,boolean isactive);
	List<Apartment> findByFlattypeAndIsactive(String flattype,boolean isactive);
	List<Apartment> findByFurnishtypeAndIsactive(String furnishtype,boolean isactive);

	List<Apartment> findByFurnishtypeAndCityAndIsactive(String furnishtype,String city,boolean isactive);
	List<Apartment> findByFurnishtypeAndFlattypeAndIsactive(String furnishtype,String flattype,boolean isactive);
	List<Apartment> findByCityAndFlattypeAndIsactive(String city,String furnishtype,boolean isactive);

	List<Apartment> findByCityAndFlattypeAndFurnishtypeAndIsactive(String city,String flattype,String furnishtype,boolean isactive);
}
