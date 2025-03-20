import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import BuyerStep from "./components/BuyerStep.jsx";
import SupplierStep from "./components/SupplierStep.jsx";
import ThankYou from "./components/ThankYou.jsx";
import BannerImage from "./assets/Images/banner.png";

const Home = () => (
  <div className="container">
    <div className="content text-center">
      <img
        src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Banner Image"
        className="img-fluid"
      />
      <h1 className="display-4 home-title">
        Connect with Creatives. Create with Ease.
      </h1>
      <h2 className="h5 home-subtitle">
        Find the perfect creative professional for your project or grow your
        creative business with Dial-a-Creative.
      </h2>
      <p className="lead home-text">
        Join Our Waiting List, fill out form below.
      </p>
      <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
        <Link to="/buyer/step1" className="btn btn-primary btn-lg home-button">
          I’m seeking a Creative
        </Link>
        <Link
          to="/supplier/step1"
          className="btn btn-primary btn-lg home-button"
        >
          I’m a Media Creative
        </Link>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buyer/step1" element={<BuyerStep />} />
          <Route path="buyer/step2" element={<BuyerStep />} />
          <Route path="buyer/step3" element={<BuyerStep />} />
          <Route path="buyer/step4" element={<BuyerStep />} />
          <Route path="buyer/step5" element={<BuyerStep />} />
          <Route path="buyer/step6" element={<BuyerStep />} />
          <Route path="buyer/thankyou" element={<ThankYou />} />
          <Route path="supplier/step1" element={<SupplierStep />} />
          <Route path="supplier/step2" element={<SupplierStep />} />
          <Route path="supplier/step3" element={<SupplierStep />} />
          <Route path="supplier/step4" element={<SupplierStep />} />
          <Route path="supplier/step5" element={<SupplierStep />} />
          <Route path="supplier/step6" element={<SupplierStep />} />
          <Route path="supplier/step7" element={<SupplierStep />} />
          <Route path="supplier/thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
