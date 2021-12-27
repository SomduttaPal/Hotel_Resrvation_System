import React from "react";
import Service from "../services/Service";
import { UserHeaderComponent } from "./UserHeaderComponent";

export class UserBookingHistory extends React.Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: token,
            booking:[],
            loggedIn
        }
    }

    componentDidMount(){
        Service.getBookingForUser(this.state.emailId).then((res)=>{
            console.log(JSON.stringify(res.data))
            this.setState({booking:res.data})
        })
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/login");
        }
        return <div class="jumbotron text-center">
        <UserHeaderComponent/>
        <br/>
        <h1>Your All Previous Booking's</h1>
        <img src="/Images/room1.jpg"></img>
        <br/><br/>
        <table className="table">
            <tr className="table-active">
                <th scope="col">Booking Id</th>
                <th scope="col">Hotel Name</th>
                <th scope="col">Room Number</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Price</th>
                <th scope="col">CheckIn</th>
                <th scope="col">CheckOut</th>
            </tr>
            <tbody>
            {
                this.state.booking.map(
                    booking =>
                    <tr key = {booking.bookingId}>
                        <td>{booking.bookingId}</td>
                        <td>{booking.room.hotel.hotelName}</td>
                        <td>{booking.room.roomId}</td>
                        <td>{booking.room.hotel.address}</td>
                        <td>{booking.room.hotel.city}</td>
                        <td>{booking.room.price}</td>
                        <td>{booking.checkIn.slice(0,10)}</td>
                        <td>{booking.checkOut.slice(0,10)}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
        <button className="btn-dark btn-lg" onClick={() => {this.props.history.push(`/homeuser/${this.state.emailId}`)}}>Back</button>
        </div>
    }
}