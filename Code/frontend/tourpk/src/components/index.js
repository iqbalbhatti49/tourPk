export { NavBar } from "./NavBar/NavBar";
export { default as HorizontalScroll } from "./HorizontalScroller/HorizontalScroller";
export { Footer } from "./Footer/Footer";
export { default as Button } from './Button/Button';
export { default as FormField } from './FormField/FormField'
export { default as BlogPost } from './BlogPost/BlogPost';
export { default as CommentSection } from './CommentSection/CommentSection';
export { default as BookingCard } from './BookingCard/BookingCard';
export { default as BookingsSidebar } from './BookingsSidebar/BookingsSidebar';
export { PaymentMethod } from "./PaymentMethod/PaymentMethod";
export { OrderReview } from "./OrderReview/OrderReview";
export { DiscountCodes } from "./DiscountCodes/DiscountCodes";
export { BillingSummary } from "./BillingSummary/BillingSummary";
export { default as Dropdown } from "./Dropdown/Dropdown";
export { default as FAQDropdown } from "./FAQDropdown/FAQDropdown";
export { SectionHero } from "./SectionHero/SectionHero";
export { SectionSearch } from "./SectionSearch/SectionSearch";
export { SectionHierarchy } from "./SectionHierarchy/SectionHierarchy";
export { PriceCard } from "./PriceCard/PriceCard";
export { HotelCard } from "./HotelCard/HotelCard";
export { BillingAddress } from './BillingAddress/BillingAddress';
export { default as Carousel } from './Carousel/Carousel';
export { Testimonial } from './Testimonial/Testimonial';
export { BookingCalendar } from './BookingCalendar/BookingCalendar';
export { CircularRating } from './CircularRating/CircularRating';
export { default as Rating } from "./Rating/Rating"
export { default as ReviewForm } from "./ReviewForm.js/ReviewForm"
export { default as HotelBooking } from "./HotelBooking/HotelBooking"
export { default as CategoryContainer } from "./CategoryContainer/CategoryContainer";
export { addBlog, updateBlog } from "../app/features/blogs/blogsSlice";
export { default as RoomAmeneties } from "./RoomAmeneties/RoomAmeneties";
export { default as ServicesTabs } from "./ServicesTabs/ServicesTabs"
export { Logo } from "./Logo/Logo"

//Redux State
export { store, persistor } from '../app/store';
export { addPackage } from '../app/features/pacakage/pacakageSlice';
export { toggleChecked, updateUserWithPlanDetails } from '../app/features/pricing/pricingSlice';
export {
    updateUser, login, logout, updateEmailVerification,
    forgotPassword, resetPassword, updatePhoneNumberVerification
} from '../app/features/user/userSlice';
export { fetchBlogById, fetchBlogs } from '../app/features/blogs/blogsSlice';
export { helpRequest } from "../app/features/help/help";
export { addItem, clearCart } from "../app/features/cart/cartSlice";
export { fetchServicesByUserId } from '../app/features/services/servicesSlice';

//Icons
export { default as IconAdd } from './IconAdd/IconAdd';
export { IconKpk } from "./IconKpk/IconKpk";
export { IconPunjab } from "./IconPunjab/IconPunjab";
export { IconSindh } from "./IconSindh/IconSindh";
export { IconBalochistan } from "./IconBalochistan/IconBalochistan";
export { IconStar } from './IconStar/IconStar';
export { default as IconEmail } from './IconEmail/IconEmail';
export { default as IconPassword } from './IconPassword/IconPassword';
export { IconHotel } from "./IconHotel/IconHotel";
export { IconResturant } from "./IconResturant/IconResturant";
export { IconGuide } from "./IconGide/IconGuide";
export { IconAgent } from "./IconAgent/IconAgent";
export { default as IconPerson } from './IconPerson/IconPerson';
export { default as IconEdit } from './IconEdit/IconEdit';
export { default as IconDelete } from './IconDelete/IconDelete';
export { default as IconAvatar } from './IconAvatar/IconAvatar';
export { default as BlogMenu } from './BlogMenu/BlogMenu';
export { IconLocation } from "./IconLocation/IconLocation"

//utils
export {
    required, validateAlpha, validatePhoneWithCode, validateEquality,
    mustBeNumber, validateURL, validatePassword, validatePhone, validateEmail,
    amenities, roomAmenitiess, mealOptions, featureOptions, itenerary, axiosInstance,
    questions, getReviewsStats, provinces, agreement, injectStore, ScrollToTop
} from '../utils';


//components
export { Form as FinalForm } from 'react-final-form';
export { Routes, Route, useNavigationType, Link, useNavigate, useLocation, useParams, BrowserRouter }
    from 'react-router-dom';
export { useDispatch, useSelector, Provider } from 'react-redux';
export { React, useState, useEffect } from 'react';
export { default as ReactQuill } from "react-quill";
import swal from 'sweetalert';
export { swal };
export { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
export { default as Switch } from "react-switch";
export { createRoot } from "react-dom/client";
export { PersistGate } from 'redux-persist/integration/react'
