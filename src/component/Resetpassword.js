import Input from '../component/Input'
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Helmetc from "./Helmetc";
import "./styles/Resetpassword.css";
const Resetpassword = () => {
  return (
    <React.Fragment>
      <Helmetc title="Reset-password" />
      <Breadcrumb title="Reset-password" />
      <div className="Reset-wrapper">
        <div className="Reset-form">
          <h3>Reset Password</h3>
          <form>
            <Input type="password" placeholder="New Password..." />
            <Input type="password" placeholder="Conform Password..." />
            <button>Reset</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resetpassword;
