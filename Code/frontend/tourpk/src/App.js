import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";
import { PaymentInformation, AccountVerification, Home, Services, InAppPlans, Cities, Contract, Login, Signup, AddPackage, CheckOut, AddRestaurant, Bookings, HelpAndSupport, HotelListing, BlogPage, AddBlog, Blogs, SpotListing, ForgetPassword, ResetPassword, AddService, TourGuideListing, AddTourGuide, AddHotel, AddHotelRoom, RestaurantListing, ServiceProviderHome, TravelAgentListing, EmailVerification } from "./pages/index";
import AddTravelAgent from "./pages/AddTravelAgent/AddTravelAgent";
import SearchResult from "./pages/SearchResult/SearchResult";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/contract" element={<Contract />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/addrestaurant" element={<AddRestaurant />} />
      <Route path="/addService" element={<AddService />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/help" element={<HelpAndSupport />} />
      <Route path="/AddBlog" element={<AddBlog />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/plans" element={<InAppPlans />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signupAsTourist" element={<Signup userType="tourist" />} />
      <Route path="/signupAsSeller" element={<Signup userType="seller" />} />
      <Route path="/hotelListing/:id" element={<HotelListing />} />
      <Route path="/Blog/:id" element={<BlogPage />} />
      <Route path="/allBlogs" element={<Blogs />} />
      <Route path="/spotListing" element={<SpotListing />} />
      <Route path="/tourGuideListing/:id" element={<TourGuideListing />} />
      <Route path="/TravelAgentListing/:id" element={<TravelAgentListing />} />
      <Route path="/addTourGuide" element={<AddTourGuide />} />
      <Route path="/addHotel" element={<AddHotel />} />
      <Route path="/addTravelAgent" element={<AddTravelAgent />} />
      <Route path="/addHotelRoom" element={<AddHotelRoom />} />
      <Route path="/restaurantListing/:id" element={<RestaurantListing />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      <Route path="/verify" element={<AccountVerification />} ></Route>
      <Route path="/serviceProvider" element={<ServiceProviderHome />} ></Route>
      <Route path="/paymentInformation" element={<PaymentInformation />} ></Route>
      <Route path="/verifyEmail" element={<EmailVerification />} ></Route>
      <Route path="/searchResult" element={<SearchResult />} ></Route>
    </Routes>
  );
};

export default App;