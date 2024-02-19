package com.property.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.property.models.Owner;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Integer> {

	Owner findByUserid(String userid);
}
