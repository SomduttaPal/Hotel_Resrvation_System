package com.persistent.hrs.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Hotel")
public class Hotel {
	
	@Id
	@GeneratedValue
	private long hotelId;
	
	@NotNull(message="Name of the Hotel is required")
	@Column(name="hotelName")
	private String hotelName;
	
	@NotNull(message="Owner name is required")
	@Column(name="ownerName")
	private String ownerName;
	
	@NotNull(message="Address is required")
	@Column(name="address")
	private String address;
	
	@NotNull(message="City is required")
	@Column(name="city")
	private String city;

	@Size(min=10, max=10,message="Mobile number should be of 10 digits")
	@Column(name="phoneNumber")
	private String phoneNumber;
	
	@NotNull(message="EmailId is required")
	@Email(message="Please enter valid EmailId")
	@Column(name="emailId")
	private String emailId;
	
	@NotNull(message="Password is required")
	@Column(name="password")
	private String password;
	
	public Hotel() {
		
	}

	public Hotel(@NotNull(message = "Name of the Hotel is required") String hotelName,
			@NotNull(message = "Owner name is required") String ownerName,
			@NotNull(message = "Address is required") String address,
			@NotNull(message = "City is required") String city,
			@Size(min = 10, max = 10, message = "Mobile number should be of 10 digits") String phoneNumber,
			@NotNull(message = "EmailId is required") @Email(message = "Please enter valid EmailId") String emailId,
			@NotNull(message = "Password is required") String password) {
		super();
		this.hotelName = hotelName;
		this.ownerName = ownerName;
		this.address = address;
		this.city = city;
		this.phoneNumber = phoneNumber;
		this.emailId = emailId;
		this.password = password;
	}

	public long getHotelId() {
		return hotelId;
	}

	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
