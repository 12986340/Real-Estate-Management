package com.property.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.property.models.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

}
