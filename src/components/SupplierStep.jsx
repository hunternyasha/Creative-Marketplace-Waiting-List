import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const SupplierStep = () => {
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
    navigate(`/supplier/step2`);
  };

  const handleOptionSelect = (value) => {
    console.log(`Current Step: ${currentStep}, Selected Value: ${value}`); // Debug log
    setFormData((prev) => ({ ...prev, [currentStep]: value }));
    if (currentStep < 7) {
      console.log(`Navigating to /supplier/step${currentStep + 1}`); // Debug log
      navigate(`/supplier/step${currentStep + 1}`);
    } else {
      console.log("Navigating to /supplier/thankyou"); // Debug log
      const finalData = { ...formData, [currentStep]: value };
      navigate("/supplier/thankyou", { state: { submittedData: finalData } });
    }
  };

  const questions = {
    1: "Hi, Welcome Media Creative!",
    2: "What is your primary goal as a media creative?",
    3: "What is your biggest challenge in finding consistent work opportunities?",
    4: "How do you currently find new projects or clients?",
    5: "What feature would make a creative services platform most appealing to you?",
    6: "How important is it for you to have access to a platform that connects you with local clients for in-person projects?",
    7: "What is your primary concern when working with clients?",
    8: "How much commission are you willing to pay to use a platform that guarantees consistent work opportunities?",
  };

  const options = {
    2: [
      "Reach more clients",
      "Manage projects efficiently",
      "Grow my creative business",
    ],
    3: [
      "Lack of visibility and exposure to potential clients",
      "Inconsistent pay and compensation for projects",
      "Limited networking opportunities",
    ],
    4: [
      "Online platforms and marketplaces",
      "Personal network and referrals",
      "Social media and local listings",
    ],
    5: [
      "Access to a diverse range of projects and clients",
      "Tools for managing projects and ensuring timely payments",
      "Opportunities for networking and professional growth",
    ],
    6: [
      "Very important – I prefer in-person work",
      "Somewhat important – it depends on the project",
      "Not very important – I prefer remote work",
    ],
    7: [
      "Ensuring fair compensation for my work",
      "Managing project expectations and communications",
      "Finding projects that align with my skills and interests",
    ],
    8: [
      "Up to 20% commission for guaranteed work",
      "Between 10% to 20% commission",
      "Less than 10% commission",
    ],
  };

  const stepImages = {
    1: "https://images.pexels.com/photos/7455875/pexels-photo-7455875.jpeg?auto=compress&cs=tinysrgb&w=600", // Form image
    2: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600", // Primary goal
    3: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600", // Work opportunities
    4: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600", // Finding projects
    5: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=600", // Platform feature
    6: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600", // Local clients
    7: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600", // Client concerns
    8: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600", // Commission
  };

  return (
    <div className="container">
      <div className="content supplier-content">
        <h2 className="supplier-title">{questions[currentStep]}</h2>
        <img
          src={stepImages[currentStep]}
          alt={`Step ${currentStep} Image`}
          className={currentStep === 1 ? "supplier-image" : "supplier-image"}
        />
        {currentStep === 1 ? (
          <div className="supplier-form">
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
                    option.startsWith("Other") ? "other" : ""
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

export default SupplierStep;
