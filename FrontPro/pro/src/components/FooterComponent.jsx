import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export class FooterComponent extends React.Component {
  render() {
    return <div>
      <footer className="w-100 bg-light text-center pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Location</h5>
              <p>
                <span className="fa fa-home"> 123, HouseName, StreetName,
                  CityName, Pincode, State, Country </span> </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" >
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning ">Contact Details</h5>
              <p> <span className="fa fa-mobile ">
                <a href="" >  +918787238793</a>
              </span>
              </p>
              <p> <span className="fa fa-phone">
                <a href="" > 03323581318</a>
              </span>
              </p>
              <p>  <span className="fa fa-envelope-o">
                <a href=""> info@staynest.com</a>
              </span>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow us</h5>
              <p>
                <span className="fa fa-facebook"> Facebook</span>
              </p>
              <p>
                <span className="fa fa-twitter"> Twitter</span>
              </p>
              <p>
                <span className="fa fa-instagram"> Instagram</span>
              </p>
              <p>
                <span className="fa fa-linkedin"> LinkedIn</span>
              </p>


            </div>
          </div>

          <div className="row align-item-center mx-auto">
            <div className="text-center">
              <p>Copyright &copy; 2021 STAYNEST. All rights reserved | Terms and Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    // <div>
    //   <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
    //     <p className='text-dark'>&copy; 2021 Copyright: StayNest</p>
    //   </div>
    // </div>
  }
}
