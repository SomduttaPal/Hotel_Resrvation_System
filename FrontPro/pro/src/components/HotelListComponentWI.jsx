import React from "react";
import Service from "../services/Service";
import { UserHeaderComponent } from "./UserHeaderComponent";

export class HotelListComponentWi extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            hotels: [],
            loggedIn
        }
        this.confirmRoom = this.confirmRoom.bind(this);
    }

    componentDidMount() {
        Service.getRoom().then((res) => {
            this.setState({ hotels: res.data })
        })
    }


    confirmRoom(roomId, isBooked) {
        if (isBooked) {
            alert("Sorry!!! Room is already Booked!!!")
        }
        else {
            this.props.history.push(`/confirm/${roomId}`)
        }
    }

    render() {
        if (this.state.loggedIn === false) {
            this.props.history.push("/login");
        }
        return <div>
            <UserHeaderComponent />
            <br /><br />
            <h1 class="jumbotron text-center">Our Rooms</h1>
            <br /><br />
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
                                            <button className="btn btn-dark btn-disable" onClick={() => this.confirmRoom(hotels.roomId, hotels.isBooked)}>Check Availability</button>
                                        </div>
                                    </div>
                                </div>
                                <br /><br /><br />
                            </div>
                    )
                }
            </div>
        </div>
    }
}