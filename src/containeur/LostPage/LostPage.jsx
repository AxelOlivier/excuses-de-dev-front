import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../../components/loader/loader";


import "./LostPage.css";

const LostPage = () => {

    const history = useHistory();

   /**
   * After 5sec redirect user to HomePage
   * @returns {void}
   */
  useEffect(() => {
    setTimeout(() => {
      redirectToHomePage();
    }, 5000);
  }, []);

  /**
   * redirect user to Home Page 
   * @returns {void}
   */
  const redirectToHomePage = () => {
    history.push("/")
  }
  
  return (
    <div className="lost_container">
      <h1>I’m lost</h1>
      <img 
      src="https://media1.giphy.com/media/c20UV66B7zCWA/giphy.gif?cid=ecf05e473qwfi15egk6riegmgl8tx67evoevrfu1oewvczf4&rid=giphy.gif&ct=g" 
      alt="YOU ARE LOST" />
    </div>
  );
};

export default LostPage;