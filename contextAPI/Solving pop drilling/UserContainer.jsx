import { NavbarContext } from "./Navbar";
import { useContext } from "react";

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};
export default UserContainer;
