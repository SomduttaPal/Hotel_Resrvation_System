import React from "react";
import { NavBarComponent } from "./NavBarComponent";

export class HomeComponent extends React.Component {

  signupUser() {
    this.props.history.push("/adduser");
  }

  loginUser() {
    this.props.history.push("/login");
  }

  signupOwner() {
    this.props.history.push("/addowner");
  }

  loginOwner() {
    this.props.history.push("/loginowner");
  }

  render() {
    return <div>
      <NavBarComponent />
      <section id="header" className="d-flex py-5 align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-align-center flex-column">
                  <br /><br /><h1 className="text-uppercase mb-4 font-weight-bold text-warning ">WELCOME TO <strong className="brand-name"> STAYNEST </strong></h1>
                  <h2 className="my-3">
                    Find Your Best Hotels and Rooms!
                  </h2>
                  <h6 className="justify-align-center"><small>In spaces that exude joy, amidst smiles of those you hold dear, toast to a season of hope
                    & togetherness with celebratory dining and stays at your favourite destinations.
                    Create memories for a lifetime. Set your soul free to embrace the sheer magic of experiencing
                    timeless traditions. Realize cherished moments for a lifetime with every STAYNEST, crafted
                    with impeccable details just for you and your loved ones.
                  </small>
                  </h6>
                  <div className="mt-3 gy-3">
                    <br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn-dark btn-lg" onClick={this.signupUser.bind(this)}>Signup User</button>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn-dark btn-lg" onClick={this.loginUser.bind(this)}>Login User</button> <br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>

                <div className="col-lg-6 order-1 py-3 order-lg-2  header-img">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="\images\hotel.jpg" className="img-fluid animated" /> <br /><br />
                  <button className="btn-dark btn-lg" onClick={this.signupOwner.bind(this)}>Signup Owner</button>      &nbsp;&nbsp;&nbsp;
                  <button className="btn-dark btn-lg" onClick={this.loginOwner.bind(this)}>Login Owner</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  }
}