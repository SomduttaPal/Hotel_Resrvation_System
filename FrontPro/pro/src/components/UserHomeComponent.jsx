import React from "react";
import { UserHeaderComponent } from "./UserHeaderComponent";

export class UserHomeComponent extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: token,
            loggedIn
        }
    }

    // componentDidMount(){
    //     this.setState({emailId:this.props.match.params.emailId});
    // }

    profileUser() {
        //this.props.history.push(`/profileuser/${emailId}`)
        this.props.history.push('/profileuser')
    }

    showHotels() {
        this.props.history.push('/hotellist')   
    }

    showBooking() {
        this.props.history.push('/mybooking')   
    }

    showRoomsByFilter() {
        this.props.history.push('/roomsbyfilter')   
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/login");
        }
        return <div>
            <UserHeaderComponent/>
            <br/>
            <h1 class="jumbotron text-center">Our Services</h1>
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
                                    <h2>Search Hotel Rooms</h2>
                                    <p class="text-muted">You Can Search Rooms Anytime Anywhere</p>
                                    <button className="btn btn-dark" onClick={this.showHotels.bind(this)}>Show Hotels</button>
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
                                    <h2>Rooms Using Filter</h2>
                                    <p class="text-muted">You Can Search Rooms Using Differnt Filter Options Anytime Anywhere</p>
                                    <button className="btn btn-dark" onClick={this.showRoomsByFilter.bind(this)}>Filter Room</button>
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
                    <div className="col-md-4 py-5 col-sm-6"></div>
                    <div className="col-md-4 py-5 col-sm-6">
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
                                    <button className="btn btn-dark" onClick={this.profileUser.bind(this)}>Show Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    }
}