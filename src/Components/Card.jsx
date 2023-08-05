import "./Card.css";
const Card = (props) => {
  return (
    <div className="sub-div">
      <h2>ID Card</h2>
      <img
        className="photo"
        src={props.img}
        style={{ height: 150, width: 150 }}
        alt=""
      />

      <br />
      <p>
        Name: {props.name}
        <br />
        Age: {props.age}
        <br />
        Gender: {props.gender}
        <br />
        Location: {props.location}
        <br />
        Phone: {props.contact}
      </p>

      <h3>Social</h3>
      <div className="icons">
        <a href={props.facebookLink}>
          <img
            src={props.facebookIcon}
            style={{ height: 50, width: 50 }}
            alt=""
          />
        </a>
        <a href="https://github.com">
          {" "}
          <img
            src={props.gitLogo}
            style={{ height: 45, width: 45 }}
            alt=""
          />{" "}
        </a>
      </div>
    </div>
  );
};

export default Card;
