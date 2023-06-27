import {
  Routes, Route
} from "./components/index";
import { PaymentInformation, AccountVerification, Home, Services, InAppPlans, Cities, Contract, 
  Login, Signup, CheckOut, AddRestaurant, Bookings, 
  HelpAndSupport, HotelListing, BlogPage, AddBlog, Blogs, SpotListing, ForgetPassword, ResetPassword,
  AddService, TourGuideListing, AddTourGuide, AddHotel, AddHotelRoom, RestaurantListing, 
  ServiceProviderHome, TravelAgentListing, EmailVerification, SearchResult, AddTravelAgent } 
from "./pages/index";

function App() {

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
      <Route path="/verify" element={<AccountVerification />} />
      <Route path="/serviceProvider" element={<ServiceProviderHome />} />
      <Route path="/paymentInformation" element={<PaymentInformation />} />
      <Route path="/verifyEmail" element={<EmailVerification />} />
      <Route path="/searchResult" element={<SearchResult />} />
    </Routes>
  );
};

export default App;