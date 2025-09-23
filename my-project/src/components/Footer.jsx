import React from "react";
import { logoLight, paymentLogo } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* logo start here */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">abdelrhman elmasry</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <a href="">
              <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a href="">
              <FaLinkedin className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a href="">
              <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a href="">
              <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a href="">
              <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
        {/* logo end here */}

        {/* locateUs start here  */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2 cursor-default">
            <p>EGY,Elsharquia Zagazig-City</p>
            <p>Mobile: 01270381307</p>
            <p>WhatsApp: 01028031015</p>
            <p>E-mail: almsrybdalrhmn111@gmail.com</p>
          </div>
        </div>
        {/* locateUs end here  */}

        {/* proFile start here */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex-col flex gap-2 cursor-pointer text-base ">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        {/* proFile end here */}

        {/* subcribe start here  */}

        <div className="flex flex-col justify-center ">
          <input
            className="b-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="e-email"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white cursor-pointer">
            Subscribe
          </button>
        </div>

        {/* subcribe end here  */}
      </div>
    </div>
  );
};

export default Footer;
