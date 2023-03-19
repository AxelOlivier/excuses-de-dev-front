import React, { useState, useEffect } from "react";
import { useHistory   } from "react-router-dom";
import HomePageController from "./CodeHttpPageController";

import "./CodeHttpPage.css";
import { useParams } from "react-router-dom";

const CodeHttpPage = () => {

    const [currentExcuse, setCurrentExcuse] = useState()
    const history = useHistory();

    const { id } = useParams();

  useEffect(() => {
    //call api to get a specifique excuse by IB
    HomePageController.getExcusesByID(id).then((excuse) => {
      setCurrentExcuse(excuse);
    }).catch(() => {
      //if error redirect user to 404 page
      redirect404Page();
    });
  }, []);

    /**
   * redirect user to 404
   * @returns {void}
   */
  const redirect404Page = () => {
    history.push("/*")
  }

  return (
    <div className="CodeHttp_page">
    <div className="container">
      {
        currentExcuse && (
          <h2> {currentExcuse.message} </h2>
          )
        }
    </div>
        </div>
  );
};

export default CodeHttpPage;