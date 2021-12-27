package com.persistent.hrs.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
	
	@Id
	@GeneratedValue
	private long bookingId;
	
	@Column(name = "checkIn")
	private Date checkIn;
	
	@Column(name = "checkOut")
	private Date checkOut;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="roomId")
	private Room room;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="emailId")
	private User user;
	
	public Booking(){
		
	}
	
	public Booking(Date checkIn, Date checkOut, Room room, User user) {
		super();
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.room = room;
		this.user = user;
	}
	
	public long getBookingId() {
		return bookingId;
	}

	public Date getCheckIn() {
		return checkIn;
	}

	public Date getCheckOut() {
		return checkOut;
	}

	public Room getRoom() {
		return room;
	}

	public User getUser() {
		return user;
	}

	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}

	public void setCheckIn(Date checkIn) {
		this.checkIn = checkIn;
	}

	public void setCheckOut(Date checkOut) {
		this.checkOut = checkOut;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
