import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isThankYouPage = location.pathname.includes("thankyou");
  const isBuyerOrSupplierPage =
    location.pathname.includes("buyer") ||
    location.pathname.includes("supplier");
  const isQuestionPage = location.pathname.includes("/step");
  const currentStep = parseInt(
    location.pathname.split("/").pop().replace("step", "") || "0"
  );

  const totalSteps = location.pathname.includes("buyer") ? 6 : 7;
  const visibleSteps = totalSteps - 1;
  const adjustedStep = currentStep - 1;

  const progressText = () => {
    switch (currentStep) {
      case 1:
        return "You Are Almost There...!";
      case 2:
        return "Keep It Up, You Are Almost There...!";
      case 3:
        return "Keep Going...!";
      case 4:
        return "Keep Going, You Are Almost There...!";
      case 5:
        return "Keep Going...!";
      case 6:
        return "Join!";
      case 7:
        return "Join!";
      default:
        return "You Are Almost There...!";
    }
  };

  const handleBack = () => {
    if (currentStep > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="container layout-container rounded-2">
      <header className=" p-3 mb-4 layout-header">
        <Link to="/" className="logo nav-link">
          <h1 className="layout-title nav-link">Dial-a-Creative</h1>
        </Link>
        {isBuyerOrSupplierPage && isQuestionPage && currentStep > 1 && (
          <button onClick={handleBack} className="btn btn-secondary back-btn">
            ←
          </button>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      {isHomePage || isThankYouPage || !isQuestionPage || currentStep < 2 ? (
        <footer className="text-center bg-dark text-white p-3 mt-4 layout-footer">
          <p className="footer-text">
            {isThankYouPage
              ? "Dial-a-Creative © Copyright 2025 All Rights Reserved"
              : "Dial-a-Creative © Copyright 2025 All Rights Reserved"}
          </p>
        </footer>
      ) : (
        isBuyerOrSupplierPage && (
          <footer className="text-white text-center position-relative layout-footer">
            <div className="step-indicator-wrapper">
              {Array.from({ length: visibleSteps }, (_, index) => {
                const stepNumber = index + 1;
                return (
                  <div
                    key={stepNumber}
                    className={`step-indicator ${
                      adjustedStep >= stepNumber ? "active" : ""
                    }`}
                  />
                );
              })}
            </div>
            <p className="progress-text">{progressText()}</p>
          </footer>
        )
      )}
    </div>
  );
};

export default Layout;
