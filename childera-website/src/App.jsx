import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { Childera } from "./Pages/Childera";
import Program from "./Pages/Program";
import Features from "./Pages/Features";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Featuresofapp from "./Pages/Featuresofapp";
import Billing from "./Pages/Billing";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Helpcenter from "./Pages/Helpcenter";
import Personal from "./Components/Help/Personal";
import Family from "./Components/Help/Family";
import Payment from "./Components/Help/Payment";
import Checkin from "./Components/Help/Checkin";
import Report from "./Components/Help/Report";
import Customer from "./Pages/Customer";
import GetStart from "./Pages/GetStart";
import DowntoUp from "./Pages/DowntoUp";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Blog from "./Pages/Blog";
import BlogIndividual from "./Pages/BlogIndividual";
import AdminLayout from "./Pages/admin/Layout";
import AdminIndexPage from "./Pages/admin";
import { SignInPage } from "./Pages/admin/sign-in/SignIn";
import BlogIndexPage from "./Pages/admin/blogs";
import CreateBlogs from "./Pages/admin/blogs/create";
import EditBlogs from "./Pages/admin/blogs/edit";
import ViewSingleBlog from "./Pages/admin/blogs/view";
import ProtectedRoute from "./Pages/admin/ProtectRoutes";

const IndexLayout = () => {
  return (
    <>
      <Navbar />
      <DowntoUp />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/" element={<IndexLayout />}>
            <Route index element={<Home />} />
            <Route path="/get-start" element={<GetStart />} />
            <Route path="/solution/program" element={<Program />} />
            <Route path="/solution/childcare" element={<Childera />} />
            <Route path="/solution/featuresofparent" element={<Features />} />
            <Route path="/solution/featuresofapp" element={<Featuresofapp />} />
            <Route path="/solution/services" element={<Services />} />
            <Route path="/solution/billing" element={<Billing />} />
            <Route path="/resource/aboutus" element={<About />} />
            <Route path="/resource/customerfeedback" element={<Customer />} />
            <Route path="/support" element={<Helpcenter />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogIndividual />} />
            <Route
              path="/resource/helpcenter/personal"
              element={<Personal />}
            />
            <Route path="/resource/helpcenter/family" element={<Family />} />
            <Route path="/resource/helpcenter/payment" element={<Payment />} />
            <Route path="/resource/helpcenter/checkin" element={<Checkin />} />
            <Route path="/resource/helpcenter/report" element={<Report />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="/termsandconditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminIndexPage />} />
            <Route path="/admin/blog" element={<BlogIndexPage />} />
            <Route path="/admin/blog/create" element={<CreateBlogs />} />
            <Route path="/admin/blog/edit/:id" element={<EditBlogs />} />
            <Route path="/admin/blog/:id" element={<ViewSingleBlog />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;
