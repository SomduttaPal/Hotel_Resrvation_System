package com.persistent.hrs.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.persistent.hrs.model.Hotel;

@Repository
public interface HotelRepo extends JpaRepository<Hotel, Long> {
	
	Hotel findByemailId(String emailId);

}
