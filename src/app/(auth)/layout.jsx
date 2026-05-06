import Navbar from "@/components/Navbar";
import { geistMono } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${geistMono.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayout;
