import { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "pawan" });
  const logout = () => {
    console.log("logged out");
    setUser(null);
  };
  return (
    //created object {{}}
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Logo</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
