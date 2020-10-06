import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               this is B-Gallery
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>B-Gallery</span>
                     <br></br>
       						   <span>
                                  B-Gallery
                    </span>
                    <br></br>
                    <span>B-Gallery</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}