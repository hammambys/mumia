import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions/userActions";
import SearchBox from "./SearchBox";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          MUMIA
        </Link>
      </div>

      <div>
        <SearchBox />
      </div>
      {userInfo ? (
        <div className="dropdown">
          <Link to="#">
            {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/profile">User Profile</Link>
            </li>
            <li>
              <Link to="/orderhistory">Order History</Link>
            </li>
            <li>
              <Link to="#signout" onClick={signoutHandler}>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
      <div>
        <div className="dropdown">
          <Link to="#">Help</Link>
          <ul className="dropdown-content">
            <button className="primary" type="submit">
              {" "}
              LIVE CHAT
            </button>
          </ul>
        </div>
      </div>
      <div>
        <Link to="/cart">
          Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>

        {userInfo && userInfo.isSeller && (
          <div className="dropdown">
            <Link to="#admin">
              Seller <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/productlist/seller">Products</Link>
              </li>
              <li>
                <Link to="/orderlist/seller">Orders</Link>
              </li>
            </ul>
          </div>
        )}
        {userInfo && userInfo.isAdmin && (
          <div className="dropdown">
            <Link to="#admin">
              Admin <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/productlist">Products</Link>
              </li>
              <li>
                <Link to="/orderlist">Orders</Link>
              </li>
              <li>
                <Link to="/userlist">Users</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
