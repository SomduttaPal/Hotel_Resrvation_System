package com.persistent.hrs.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.persistent.hrs.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long> {
	
	@Query(value = "SELECT * FROM BOOKING b WHERE b.email_id = :emailId",nativeQuery = true )
	Collection<Booking> findBookings(@PathVariable("emailId") String emailId);
	
	@Query(value="SELECT * FROM BOOKING b WHERE room_id = :roomId" ,nativeQuery=true)
	Booking findBoookingsByRoomId(Long roomId);

}
