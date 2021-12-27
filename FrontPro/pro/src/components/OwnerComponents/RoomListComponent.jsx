import React from "react";
import Service from "../../services/Service";
import { OwnerHeaderComponent } from "./OwnerHeaderComponent";

export class RoomListComponent extends React.Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token2")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: token,
            room:[],
            loggedIn
        }
        this.updateRoom = this.updateRoom.bind(this);
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

    componentDidMount(){
        Service.getRoomList(this.props.match.params.hotelId).then((res)=>{
                console.log(JSON.stringify(res.data))
                this.setState({room:res.data})
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
        <h1>Room List</h1>
        <img src="/Images/room1.jpg"></img>
        <br/><br/>
        <table className="table">
            <tr className="table-active">
                <th scope="col">Room Id</th>
                <th scope="col">Is Ac</th>
                <th scope="col">Number of Beds</th>
                <th scope="col">Is Booked</th>
                <th scope="col">Price</th>
                <th scope="col">Update</th>
            </tr>
            <tbody>
            {
                this.state.room.map(
                    room =>
                    <tr>
                        <td>{room.roomId}</td>
                        <td>{this.getIsAc(room.isAC)}</td>
                        <td>{room.numberOfBeds}</td>
                        <td>{this.getIsAc(room.isBooked)}</td>
                        <td>{room.price}</td>
                        <td>{<button className="btn btn-dark" 
                        onClick={() => {if(!room.isBooked){this.updateRoom(room.roomId)}else{alert("Room is Booked")}}}>Update</button>}</td>
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