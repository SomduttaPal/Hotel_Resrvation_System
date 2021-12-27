import React from "react";
import Service from "../services/Service";

export class HotelListComponent extends React.Component{

    constructor() {
        super()
        this.state = {
            hotels: []
        }
        this.getIsBooked = this.getIsBooked.bind(this);
        this.getIsAc = this.getIsAc.bind(this);
        this.confirmRoom = this.confirmRoom.bind(this);
    }

    componentDidMount(){
        Service.getRoom().then((res)=>{
            this.setState({hotels:res.data})
        })
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

    confirmRoom(roomId) {
        this.props.history.push(`/confirm/${roomId}`)
    }

    render() {
        return <div  class="jumbotron text-center">
            <br/><br/>
            <h1>Hotels List</h1>
            <br/><br/>
            <table className="table">
                <tr className="table-active">
                    <th scope="col">Hotel name</th>
                    <th scope="col">Is Ac</th>
                    <th scope="col">Number Of Bed</th>
                    <th scope="col">Available</th>
                    <th scope="col">Price</th>
                </tr>
                <tbody>
                {
                    this.state.hotels.map(
                        hotels =>
                        <tr key = {hotels.roomId}>
                            <td>{hotels.hotel.hotelName}</td>
                            <td>{this.getIsAc(hotels.isAC)}</td>
                            <td>{hotels.numberOfBeds}</td>
                            <td>{this.getIsBooked(hotels.isBooked)}</td>
                            <td>{hotels.price}</td>
                            <td><button onClick={()=>this.confirmRoom(hotels.roomId)}>Book</button></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    }
}