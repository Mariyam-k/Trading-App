import React from "react";
function HeroSp() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="container p-4 " id="supportWp">
        <div className="row mt-4">
          <div className="col-4">
            <h3 className="text-light fs-4 mt-4">Support</h3>
          </div>
          <div className="col-3"></div>
          <div className="col-4 p-4 text-end">
            {" "}
            <a href="" className="text-light mt-5 " > Track Tickets</a>
          </div>
        </div>
        <div className="row text-light">
          <div className="col-6 ">
            <h3 className="fs-3 ">
              Search for an answer or browse help topics to create a ticket
            </h3>
            <input
              type="text p-3 m-2 "
              placeholder='"Eg. how do I activate F&O"'
            />{" "}
            <br />
            <div className="links mt-3 ">
              <a href="">Track Account Opening</a> <a href="">Track Segment</a>{" "}
              <br />
              <a href="">Activity</a>
              <a href="">Kite user manual</a>
            </div>
          </div>
          <div className="col-6 links_two" style={{lineHeight:"3.1"}}>
            <h1 className="fs-3">Featured</h1>
            <ol>
              <li>
                <a href="" className="text-light">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="" className="text-light">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSp;
