import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mt-10 flex justify-center gap-10 text-xl">
      <NavLink to="/">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-500" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              Home
            </span>
          );
        }}
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "Red" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "Red" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-500" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
  
    </nav>
  );
};

export default Nav;
