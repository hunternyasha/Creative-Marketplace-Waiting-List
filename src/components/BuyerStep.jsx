import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const BuyerStep = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentStep =
    parseInt(location.pathname.split("/").pop().replace("step", "")) || 1;
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formDataObj = new FormData(event.target);
    const data = {
      name: formDataObj.get("name"),
      email: formDataObj.get("email"),
      countryCode: formDataObj.get("countryCode"),
      phone: formDataObj.get("phone"),
    };
    setFormData((prev) => ({ ...prev, [currentStep]: data }));
    navigate(`/buyer/step${currentStep + 1}`);
  };

  const handleOptionSelect = (value) => {
    setFormData((prev) => ({ ...prev, [currentStep]: value }));
    if (currentStep < 6) {
      navigate(`/buyer/step${currentStep + 1}`);
    } else {
      const finalData = { ...formData, [currentStep]: value };
      navigate("/buyer/thankyou", { state: { submittedData: finalData } });
    }
  };

  const questions = {
    1: "Hi, Welcome Creative Seeker!",
    2: "What is your primary concern when working with freelancers or creatives?",
    3: "What is your biggest challenge when hiring creative professionals?",
    4: "How do you currently find creative professionals for your projects?",
    5: "What feature would make a creative services platform most appealing to you?",
    6: "How important is it for you to have a platform that offers both in-person and remote creative services?",
  };

  const options = {
    2: [
      "Ensuring consistent quality of work",
      "Managing project timelines and deadlines",
      "Negotiating fair pricing and compensation",
    ],
    3: [
      "Finding reliable and high-quality talent",
      "Managing project timelines and communications",
      "Staying within budget",
    ],
    4: [
      "Online platforms and marketplaces",
      "Word of mouth and personal referrals",
      "Social media and local listings",
    ],
    5: [
      "Ability to find local creatives for in-person projects",
      "Access to a diverse range of projects and clients",
      "AI-driven quality control and project management",
    ],
    6: [
      "Very important – I need flexibility in service delivery",
      "Somewhat important – it depends on the project",
      "Not very important – I prefer one over the other",
    ],
  };

  const stepImages = {
    1: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600", // Form image
    2: "https://images.pexels.com/photos/31206613/pexels-photo-31206613/free-photo-of-professional-camera-gimbal-outdoors-in-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600", // Primary concern
    3: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600", // Challenge question
    4: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600", // Finding creatives
    5: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600", // Platform feature
    6: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=600", // Service flexibility
  };

  return (
    <div className="container">
      <div className="content buyer-content">
        <h2 className="buyer-title">{questions[currentStep]}</h2>
        <img
          src={stepImages[currentStep]}
          alt={`Step ${currentStep} Image`}
          className={currentStep === 1 ? "img-fluid" : "supplier-image"}
        />
        {currentStep === 1 ? (
          <div className="buyer-form">
            <p className="form-text">Join Our Waiting List.</p>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="form-control"
              />
              <div className="input-group">
                <select
                  name="countryCode"
                  required
                  className="form-control country-select"
                >
                  <option value="">Select</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+263">+263</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="form-control phone-input"
                />
              </div>
              <p className="form-subtext">Answer a few questions ...</p>
              <button type="submit" className="btn btn-dark btn-lg form-button">
                Get Started!
              </button>
            </form>
          </div>
        ) : (
          <div className="question-step">
            <p className="question-text">{questions[currentStep]}</p>
            {options[currentStep] ? (
              options[currentStep].map((option, index) => (
                <button
                  key={index}
                  className={`btn btn-primary btn-lg option-button ${
                    option === "Other" ? "other" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))
            ) : (
              <p className="question-error">
                No options available for this step. Please check the
                configuration.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerStep;
