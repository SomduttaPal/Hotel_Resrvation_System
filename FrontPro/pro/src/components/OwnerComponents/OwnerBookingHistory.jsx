import React from "react";
import Service from "../../services/Service";
import { OwnerHeaderComponent } from "./OwnerHeaderComponent";

export class OwnerBookingHistory extends React.Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token2")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: token,
            booking:[],
            loggedIn
        }
        this.updateRoom = this.updateRoom.bind(this);
    }

    componentDidMount(){
        Service.getBookingForOwner(this.props.match.params.hotelId).then((res)=>{
                console.log(JSON.stringify(res.data))
                this.setState({booking:res.data})
            })
    }

    updateRoom(id) {
        this.props.history.push(`/updateroom/${id}`)
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/login");
        }
        return <div>
        <OwnerHeaderComponent/>
        <div class="jumbotron text-center">
        <br/>
        <h1>Your All Previous Booking's</h1>
        <img src="/Images/room1.jpg"></img>
        <br/><br/>
        <table className="table">
            <tr className="table-active">
                <th scope="col">Booking Id</th>
                <th scope="col">Custome Name</th>
                <th scope="col">Room Number</th>
                <th scope="col">Cutomer EmailId</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Aadhar</th>
                <th scope="col">Price</th>
                <th scope="col">CheckIn</th>
                <th scope="col">CheckOut</th>
                <th scope="col">Update</th>
            </tr>
            <tbody>
            {
                this.state.booking.map(
                    booking =>
                    <tr>
                        <td>{booking.bookingId}</td>
                        <td>{booking.user.firstName} {booking.user.lastName}</td>
                        <td>{booking.room.roomId}</td>
                        <td>{booking.user.emailId}</td>
                        <td>{booking.user.phoneNumber}</td>
                        <td>{booking.user.aadhar}</td>
                        <td>{booking.room.price}</td>
                        <td>{booking.checkIn.slice(0,10)}</td>
                        <td>{booking.checkOut.slice(0,10)}</td>
                        <td>{<button className="btn btn-dark" onClick={()=>this.updateRoom(booking.room.roomId)}>Update</button>}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
        <button className="btn-dark btn-lg" onClick={() => {this.props.history.push("/homeowner")}}>Back</button>
        </div>
        </div>
    }
}