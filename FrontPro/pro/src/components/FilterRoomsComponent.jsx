import React from "react";
import Service from "../services/Service";
import { UserHeaderComponent } from "./UserHeaderComponent";

export class FilterRoomsComponent extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            hotels: [],
            loggedIn
        }
        this.confirmRoom = this.confirmRoom.bind(this);
    }

    componentDidMount(){
        Service.getRoom().then((res)=>{
            this.setState({hotels:res.data})
        })
    }

    showAvailableRooms() {
        Service.getAvailableRoom().then((res)=>{
            this.setState({hotels:res.data})
        })
    }

    showAcRooms() {
        Service.getAcRoom().then((res)=>{
            this.setState({hotels:res.data})
        })
    }

    showNonAcRooms() {
        Service.getNonAcRoom().then((res)=>{
            this.setState({hotels:res.data})
        })
    }

    showOneBedRooms() {
        Service.getOneBedRoom.then((res)=>{
            this.setState({hotels:res.data})
        })
    }

    showTwoBedRooms() {
        Service.getTwoBedRoom().then((res)=>{
            this.setState({hotels:res.data})
        })
    }

    showThreeBedRooms() {
        Service.getThreeBedRoom().then((res)=>{
            this.setState({hotels:res.data})
        })
    }

    confirmRoom(roomId, isBooked) {
        if(isBooked) {
            alert("Sorry!!! Room is already Booked!!!")
        }
        else {
            this.props.history.push(`/confirm/${roomId}`)
        }
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/login");
        }
        return <div>
            <UserHeaderComponent/>
            <br/><br/>
            <div class="jumbotron text-center">
            <h1>Our Rooms</h1>
            <br/>
            <button className="btn btn-dark btn-lg" onClick={this.showAvailableRooms.bind(this)}>Only Available</button> &nbsp;&nbsp;
            <button className="btn btn-dark btn-lg" onClick={this.showAcRooms.bind(this)}>AC Rooms</button> &nbsp;&nbsp;
            <button className="btn btn-dark btn-lg" onClick={this.showNonAcRooms.bind(this)}>Non AC Rooms</button> &nbsp;&nbsp;
            <button className="btn btn-dark btn-lg" onClick={this.showOneBedRooms.bind(this)}>OneBed Room</button> &nbsp;&nbsp;
            <button className="btn btn-dark btn-lg" onClick={this.showTwoBedRooms.bind(this)}>TwoBed Room</button> &nbsp;&nbsp;
            <button className="btn btn-dark btn-lg" onClick={this.showThreeBedRooms.bind(this)}>ThreeBed Room</button>
            </div>
            <br/><br/>
            <div className="row">
            {
                 this.state.hotels.map(
                    hotels =>
                    <div className="col-md-4 col-sm-6">
                        <div id="serv_hover" className="room">
                            <div className="room_img">
                                <figure>
                                    <img src="\images\room1.jpg"></img>
                                </figure>
                                <hr class="mt-0 mb-4"></hr>
                            </div>
                            <div className="bed_room">
                                <div class="jumbotron text-center">
                                    <h2>Hotel {hotels.hotel.hotelName}</h2>
                                    <h6>{hotels.hotel.address}</h6>
                                    <p class="text-muted">{hotels.hotel.city}</p>
                                    <button className="btn btn-dark btn-disable" onClick={()=>this.confirmRoom(hotels.roomId, hotels.isBooked)}>Check Availability</button>
                                </div>
                            </div>
                        </div>
                        <br/><br/><br/>
                    </div>
                )
          }
        </div>
    </div>
    }
}