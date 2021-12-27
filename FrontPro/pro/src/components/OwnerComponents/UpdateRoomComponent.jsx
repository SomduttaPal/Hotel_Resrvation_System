import React from "react";
import Service from "../../services/Service";
import { OwnerHeaderComponent } from "./OwnerHeaderComponent";

export class UpdateRoomComponent extends React.Component{

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token2")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            emailId: token,
            roomId: this.props.match.params.roomId,
            isBooked: '',
            isAC: '',
            numberOfBeds: '',
            price: ''
        }
    }

    changeBooked = (event) => {
        if(event.target.value == "Yes") {
            this.setState({isBooked: true});
        }
        else {
            this.setState({isBooked: false})
        }
    }

    changeIsAc = (event) => {
        console.log("isAc "+event.target.value);
        if(event.target.value == "Yes") {
            this.setState({isAC: true});
        }
        else {
            this.setState({isAC: false})
        }
    }

    changeNumberOfBeds = (event) => {
        console.log(event.target.value)
        if(event.target.value == "1") {
            this.setState({numberOfBeds: 1});
        }
        else if(event.target.value == "2") {
            this.setState({numberOfBeds: 2})
        }
        else {
            this.setState({numberOfBeds: 3})
        }
    }

    changePrice = (event) => {
        this.setState({price: event.target.value})
    }

    updateRoom = (e) => {
        e.preventDefault();
        let room = {isBooked:this.state.isBooked, isAC:this.state.isAC, numberOfBeds:this.state.numberOfBeds, price:this.state.price};
        console.log(JSON.stringify(room));
        Service.roomUpdate(room, this.state.roomId).then(res => {
            alert("Room Updated SucCessfully!!!")
            this.props.history.push("/homeowner");
        });
    }

    render() {
        if(this.state.loggedIn === false) {
            this.props.history.push("/loginowner");
        }
        return <div>
            <OwnerHeaderComponent/>
            <div class="row d-flex justify-content-center align-items-center jumbotron text-center" >
            <br/><br/>
            <h1>Update Room</h1>
            <br/><br/><br/>
            <div className="card mb-3 col-xl-5">
                <img src=".././Images/room1.jpg"/>
            </div>
            <div className=" card mb-3 col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <br/><br/>
            <form>
                {/* <div onChange={this.changeIsAc.bind(this)}>
                    <input className="btn-default btn-lg" type="radio" value="Yes" name="isAc" />Yes
                    <input className="btn-default btn-lg" type="radio" value="No" name="isAc" />No
                </div> */}
                <h4>Is Room Booked</h4>
                <div data-toggle="buttons" onChange={this.changeBooked.bind(this)}>
                    <label class="btn btn-danger btn-lg ">
                        <input type="radio" value="Yes" name="isBooked" /> <b>Yes</b>
                    </label>&nbsp;&nbsp;&nbsp;
                        <label class="btn btn-success btn-lg">       
                        <input type="radio" value="No" name="isBooked" /> <b>No</b>
                    </label>
  	            </div>
                <br/>
                <h4>Is Ac Available</h4>
                <div data-toggle="buttons" onChange={this.changeIsAc.bind(this)}>
                    <label class="btn btn-success btn-lg ">
                        <input type="radio" value="Yes" name="isAc" /> <b>Yes</b>
                    </label>&nbsp;&nbsp;&nbsp;
                        <label class="btn btn-danger btn-lg">       
                        <input type="radio" value="No" name="isAc" /> <b>No</b>
                    </label>
  	            </div>
                <br/>
                <h4>Number Of Bed</h4>
                <div data-toggle="buttons" onChange={this.changeNumberOfBeds.bind(this)}>
                    <label class="btn btn-success btn-lg ">
                        <input type="radio" value="1" name="noofbed" /> <b>1</b>
                    </label>&nbsp;&nbsp;&nbsp;
                    <label class="btn btn-warning btn-lg">       
                        <input type="radio" value="2" name="noofbed" /> <b>2</b>
                    </label>&nbsp;&nbsp;&nbsp;
                    <label class="btn btn-danger btn-lg">       
                        <input type="radio" value="3" name="noofbed" /> <b>3</b>
                    </label>
  	            </div>
                <br/>
                <input type="number" id="validationDefault01" className="btn-default btn-lg" placeholder="Price" name="Price" required value={this.state.price} onChange={this.changePrice.bind(this)}></input> <br/><br/>
                <button className="btn-dark btn-lg" onClick={this.updateRoom.bind(this)}>Update</button>
                <br/><br/>
            </form>
            </div>
        </div>
        </div>
    }
}