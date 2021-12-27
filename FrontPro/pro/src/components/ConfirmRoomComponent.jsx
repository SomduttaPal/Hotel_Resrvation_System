import React from "react";
import Service from "../services/Service";
import { UserHeaderComponent } from "./UserHeaderComponent";

export class ConfirmRoomComponent extends React.Component{

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: token,
            hotelName: '',
            roomId: '',
            isAC: '',
            numberOfBeds: '',
            isBooked: '',
            price: '',
            address: '',
            city: '',
            phoneNumber: '',
            checkIn: '',
            checkOut: '',
            loggedIn
        }
        this.getIsBooked = this.getIsBooked.bind(this);
        this.getIsAc = this.getIsAc.bind(this);
    }

    componentDidMount(){
        Service.getRoomById(this.props.match.params.roomId).then((res)=>{
            let room = res.data;
            this.setState({hotelName:room.hotel.hotelName,
                    roomId:room.roomId,
                    isAC:room.isAC,
                    numberOfBeds:room.numberOfBeds,
                    isBooked:room.isBooked,
                    price:room.price,
                    address:room.hotel.address,
                    city:room.hotel.city,
                    phoneNumber:room.hotel.phoneNumber
            });
        });
    }

    getIsBooked(isBooked) {
        if(isBooked == true) {
            return "No"
        }
        else {
            return "Yes"
        }
    }

    getIsAc(isAc) {
        if(isAc == true) {
            return "Yes"
        }
        else {
            return "No"
        }
    }

    changeCheckIn = (event) => {
        this.setState({checkIn: event.target.value})
    }

    changeCheckOut = (event) => {
        this.setState({checkOut: event.target.value})
    }
    
    bookRoom = (e) => {
        e.preventDefault();
        let bookinfo = {room:{roomId:this.state.roomId}, user:{emailId:this.state.emailId}, checkIn:this.state.checkIn, checkOut:this.state.checkOut};
        console.log(JSON.stringify(bookinfo));
        Service.saveBooking(bookinfo).then(res => {
            let bookingId = res.data
            alert("Booking SucessFull and Your Booking Id is "+bookingId.bookingId);
           this.props.history.push(`/homeuser/${this.state.emailId}`)
        });
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/login");
        }
        return <div  class="jumbotron text-center">
            <UserHeaderComponent/>
        <br/>
        <h1>Confirm Booking</h1>
        <img src="/Images/room1.jpg"></img>
        <br/><br/>
        <table className="table">
            <tr className="table-active">
                <th scope="col">Hotel Name</th>
                <th scope="col">Room Number</th>
                <th scope="col">Is Ac</th>
                <th scope="col">Number Of Bed</th>
                <th scope="col">Available</th>
                <th scope="col">Price</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">PhoneNumber</th>
            </tr>
            <tbody>
            {
                <tr key = {this.state.roomId}>
                    <td>{this.state.hotelName}</td>
                    <td>{this.state.roomId}</td>
                    <td>{this.getIsAc(this.state.isAC)}</td>
                    <td>{this.state.numberOfBeds}</td>
                    <td>{this.getIsBooked(this.state.isBooked)}</td>
                    <td>{this.state.price}</td>
                    <td>{this.state.address}</td>
                    <td>{this.state.city}</td>
                    <td>{this.state.phoneNumber}</td>
                </tr>
            }
            </tbody>
        </table>
        <form>
            Check In: &nbsp;<input type="date" onChange={this.changeCheckIn.bind(this)} /> &nbsp;&nbsp;&nbsp;
            Check Out: &nbsp;<input type="date" onChange={this.changeCheckOut.bind(this)} /> <br/><br/>
            <button className="btn btn-dark" onClick={this.bookRoom.bind(this)}>Book Now</button>
        </form>
    </div>
    }
}