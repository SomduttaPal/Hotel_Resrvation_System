import React from "react";
import { NavBarComponent } from "./NavBarComponent";
export class AboutUsComponent extends React.Component {
    render() {
        return <div>
            <NavBarComponent/>
            <h1 align="center">About Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto gy-2">
                        <div class="card">
                            <img src="./Images/hotels.jpg" className="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">About Hotels</h5>
                                <p class="card-text">Hotels at Staynest is geared towards catering to guests at the highest level. Everything from the exterior of the hotel down to the tableware should display excellent quality and high attention to cleanliness and hygine. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto gy-2">
                        <div class="card">
                            <img src="./Images/doctorsclinic.jpg" className="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Medical Facilities</h5>
                                <p class="card-text">Our hotels has dispensaries, pharmacies, sitting rooms, isolation rooms, dressing rooms and doctor’s room. General and minor medical cases can be treated here</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto gy-2">
                        <div class="card">
                            <img src="./Images/food.jpg" className="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Food Facilities</h5>
                                <p class="card-text">We go to great lengths to ensure good quality and we would like to give our guests the best start to the day. Therefore, we offer a delicious breakfast buffet that focuses on quality, ecology, health and, not least, good taste.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto gy-2">
                        <div class="card">
                            <img src="./Images/parking.jpg" className="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Parking and Transportation Facilities</h5>
                                <p class="card-text">A parking lot is an area that is assigned for parking vehicles in the hotel premises. All hotels have designated lots, with space to hold anywhere between 500 – 10,000 twoand- four-wheelers depending on their size and popularity. These parking facilities can be indoor or outdoor, public or private</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto gy-2">
                        <div class="card">
                            <img src="./Images/rooms.jpg" className="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Rooms and Amenities </h5>
                                <p class="card-text">A standard room includes all kinds of basic facilities such as a table, chair, desk, cupboard, dressing table, DVD player, television, telephone, coffee maker and a private bathroom. Offerings other amenities in the standard room also depend on the type of hotel. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm gy-2">
                        <div class="card">
                            <img src="./Images/c0vid.jpg" className="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Covid Protocols</h5>
                                <p class="card-text">guest staying at our facility presents with symptoms, or you become aware of a case of suspected or confirmed COVID-19 on-site, follow the steps set out in the section on guests who need to self-isolate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    }
}