import React from "react";
import Service from "../../services/Service";
import { OwnerHeaderComponent } from "./OwnerHeaderComponent";

export class OwnerHomeComponent extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token2")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: token,
            hotelId:'',
            loggedIn
        }
    }

    componentDidMount(){
        Service.getOwnerByEmailId(this.state.emailId).then((res)=>{
            let hotel = res.data
            this.setState({hotelId:hotel.hotelId})
        })
    }

    profileOwner() {
        //this.props.history.push(`/profileuser/${emailId}`)
        this.props.history.push('/profileowner')
    }

    addRoom() {
        //this.props.history.push(`/profileuser/${emailId}`)
        this.props.history.push('/addroom')
    }

    logout() {
        localStorage.removeItem("token2")
        this.props.history.push("/loginowner");
    }

    showBooking() {
        this.props.history.push(`/roombooking/${this.state.hotelId}`)
    }

    roomList() {
        //this.props.history.push(`/profileuser/${emailId}`)
        this.props.history.push(`/roomlist/${this.state.hotelId}`)
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/loginowner");
        }
        // return <div  class="jumbotron text-center">
        //     <h1>Hello {this.state.emailId}</h1>
        //     <br/><br/>
        //     <br/><br/>
        //     <button className="btn-dark btn-lg" onClick={this.profileOwner.bind(this)}>Show Profile</button> &nbsp;&nbsp;&nbsp;
        //     <button className="btn-dark btn-lg" onClick={this.addRoom.bind(this)}>Add Room</button> &nbsp;&nbsp;&nbsp;
        //     <button className="btn-dark btn-lg" onClick={this.showBooking.bind(this)}>View Booking</button> &nbsp;&nbsp;&nbsp;
        //     <button className="btn-dark btn-lg" onClick={this.logout.bind(this)}>Logout</button>
        // </div>
        return <div>
        <OwnerHeaderComponent/>
        <h1 class="jumbotron py-3 text-center">Our Services</h1>
            <br/>
            <div className="row">
            <div className="col-md-4 col-sm-6">
                        <div>
                            <div>
                                <figure>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<img src="\images\room1.jpg"></img>
                                </figure>
                                <hr class="mt-0 mb-4"></hr>
                            </div>
                            <div>
                                <div class="jumbotron text-center">
                                    <h2>Add Rooms</h2>
                                    <p class="text-muted">You Can Add Rooms Anytime Anywhere</p>
                                    <button className="btn btn-dark" onClick={this.addRoom.bind(this)}>Show Hotels</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div>
                            <div>
                                <figure>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<img src="\images\room1.jpg"></img>
                                </figure>
                                <hr class="mt-0 mb-4"></hr>
                            </div>
                            <div>
                                <div class="jumbotron text-center">
                                    <h2>View Your Rooms</h2>
                                    <p class="text-muted">You Can View And Update Your Rooms Anytime Anywhere</p>
                                    <button className="btn btn-dark" onClick={this.roomList.bind(this)}>Show Rooms</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div>
                            <div>
                                <figure>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<img src="\images\room1.jpg"></img>
                                </figure>
                                <hr class="mt-0 mb-4"></hr>
                            </div>
                            <div>
                                <div class="jumbotron text-center">
                                    <h2>View Booking History</h2>
                                    <p class="text-muted">You Can View Your All Bookings Anytime Anywhere</p>
                                    <button className="btn btn-dark" onClick={this.showBooking.bind(this)}>Show Bokkings</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-4 py-4 col-sm-6"></div>
                    <div className="col-md-4 py-4 col-sm-6">
                        <div>
                            <div>
                                <figure>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<img src="\images\room1.jpg"></img>
                                </figure>
                                <hr class="mt-0 mb-4"></hr>
                            </div>
                            <div>
                                <div class="jumbotron text-center">
                                    <h2>View Your Profile</h2>
                                    <p class="text-muted">You Can View And Update Your Profile Anytime Anywhere</p>
                                    <button className="btn btn-dark" onClick={this.profileOwner.bind(this)}>Show Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    }
}