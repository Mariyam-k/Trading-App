import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6 mb-5 p-5">
          <img src={imageURL} alt="" style={{width:"90%"}} />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>

          <p className="mb-5">{productDescription}</p>

          <div className="mt-2">
            <a
              href={tryDemo}
              style={{ textDecoration: "none" }}
            >
              Try Demo<i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none",marginLeft:'50px' }}>
              Learn More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
             <a href={googlePlay}>
              <img src="media\googlePlayBadge.svg "></img>
            </a>
            <a href={appStore}>
              <img src="media\appstoreBadge.svg" style={{marginLeft:"50px"}}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
