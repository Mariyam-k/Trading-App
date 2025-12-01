import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 ">
        <hr />
        <h1 className="fs-2 text-center fs-6 mt-4">People</h1>
      </div>
      <div
        className="row p-5  text-muted fs-6"
        style={{ fontSize: "1.3rem", lineHeight: "1.5rem" }}
      >
        <div className="col-6 p-5 text-center mt-5">
          <img
            src="media\IMG_20251106_122518.jpg"
            alt=""
            style={{
              borderTopLeftRadius: "50%",
              borderBottomRightRadius: "50%",
              width: "100%",
            }}
          />
          <h4 className="mt-3">Mariyam Khan</h4>
          <h6> Full Stack Developer | Designer of Seamless Web Solutions</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            I’m Mariyam Khan, a passionate and driven Full Stack Developer who
            loves turning ideas into interactive and efficient digital
            experiences. I specialize in both frontend and backend development,
            with skills in
            <b>HTML, CSS, JavaScript, React.js, Node.js, Express.js, and C++</b>
            , along with a good understanding of
            <b>database management and API integration</b>.
          </p>
          <p>
            My portfolio includes several projects such as a{" "}
            <b>
              Spotify Clone, a Trading Web App, a ChatGPT-integrated Assistant,
              and a Weather Application
            </b>{" "}
            — each reflecting my ability to design, build, and optimize dynamic
            web solutions.
          </p>
          <p>
            In addition to my technical background, I’ve earned certifications
            from <b>ISRO–IIRS</b> for completing an online course on{" "}
            <i> Geo-Sharing, Data Sharing, and Cybersecurity</i>, and from{" "}
            <b>SWAYAM</b>, which has further strengthened my academic and
            professional foundation.
          </p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              E-Mail/
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              GitHub/
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
