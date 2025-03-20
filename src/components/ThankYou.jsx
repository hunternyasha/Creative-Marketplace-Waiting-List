import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="image-container">
          <img
            src="https://images.pexels.com/photos/5088422/pexels-photo-5088422.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Excavator"
            className="thank-you-image"
          />
          <div className="orange-rectangle" />
        </div>
        <h2 className="thank-you-title">THANK YOU!</h2>
        <div className="checkmark-container">
          <span className="checkmark">✓</span>
        </div>
        <p className="thank-you-message">
          You Have Successfully Joined Our Waiting List,
          <br />
          We’ll Keep you Posted. Stay connected for updates!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
