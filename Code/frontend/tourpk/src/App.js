import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, Services, InAppPlans, Cities, Contract, Login, Signup, AddPackage, CheckOut, AddRestaurant, Bookings, HelpAndSupport, GenericInfoAboutService, Listing, BlogPage, AddBlog, Blogs } from "./pages/index";

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
      <Route exact path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<InAppPlans />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/contact" element={<Contract />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signupAsTourist" element={<Signup userType="tourist" />} />
      <Route path="/signupAsSeller" element={<Signup userType="seller" />} />
      <Route path="/signupAsTourist" element={<Signup userType="tourist" />} />
      <Route path="/signupAsSeller" element={<Signup userType="seller" />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/addpackage" element={<AddPackage />} />
      <Route path="/addrestaurant" element={<AddRestaurant />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/helpandsupport" element={<HelpAndSupport />} />
      <Route path="/genericinfo" element={<GenericInfoAboutService />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/Blog/:id" element={<BlogPage />} />
      <Route path="/AddBlog" element={<AddBlog />} />
      <Route path="/allBlogs" element={<Blogs />} />
    </Routes>
  );
};

export default App;
