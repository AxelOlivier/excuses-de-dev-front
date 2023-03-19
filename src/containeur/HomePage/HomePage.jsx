import React, { useState, useEffect } from "react";
import HomePageController from "./HomePageController";

import "./HomePage.css";
import ExcuseCard from "../../components/excuseCard/excuseCard";
import ActionButton from "../../components/actionButton/actionButton";
import Loader from "../../components/loader/loader";
import ModalAddExcuse from "../../components/modal_add_excuses/modal_add_excuses";

const HomePage = () => {

    const [excusesList, setExcuseList] = useState([])
    const [currentIdExcuse, setCurrentIdExcuse] = useState(0)

    const [isLoaded, setIsLoaded] = useState(false);

    const [homeAnimation , setHomeAnimation] = useState("");

    const [modalIsActived , setModalIsActive] = useState(false);


   useEffect(() => { 
    console.log('USEEFFECT');   
        getExcuseListFromApi();
        animationHomepage();
      }, []);

/**
 * start animation
 * @return  {void}            
 */
  const animationHomepage = () => {
    setTimeout(() => {
    setHomeAnimation("animation_start");
     }, 50);
   setTimeout(() => {
    setHomeAnimation("animation_end");
  }, 2001);
  }

/**
   * function call controller to call api and return excuse list
   * @returns {void}
   */
  const getExcuseListFromApi = () => {
    HomePageController.getAllExcuses().then((excuses) => {
        setExcuseList(excuses)
        //getOneNewExcuse(excuses);
    });
  };


  /**
   * get a new id on the max length of the list 
   * @param {object} excuselist  optional list
   * @returns {void}
   */
  const getOneNewExcuse = (excuselist) => {
      let randomID = setRandomNumberFromList( excuselist ? excuselist.length : excusesList.length);
      
      if(randomID === currentIdExcuse)
      {
          while (randomID === currentIdExcuse) {
              randomID = setRandomNumberFromList(excusesList.length)
            }
    }
    triggerLoader(() =>  setCurrentIdExcuse(randomID));
  } 

    /**
   * return a random value compared to the length of the list
   * @param {number} listLength - lenght of the list 
   * @returns {number}
   */
  const setRandomNumberFromList = (listLength) => {
    return Math.floor(Math.random() * listLength);
  }

  /**
   * generate random number in relation to the inputs min/max
   * @param {number} minRange  min value (included)
   * @param {number} maxRange  max value (not included)
   * @returns {number}
   */
  const getRandomNumberFoLoader = (minRange , maxRange) => {
    return  Math.floor(Math.random() * (maxRange - minRange) + minRange);
  }


  /**
   *  Simulate a loading
   *        set a randomy timer load between 1s and 5s
   *        and execute function on callback
   * @param {function} callBackFoo  execute function when loader is finish
   */
  const triggerLoader = (callBackFoo) => {
    setIsLoaded(true);
    const timeToLoaded = getRandomNumberFoLoader(1000, 5000);
    setTimeout(() => {
      setIsLoaded(false);
      callBackFoo();
    }, timeToLoaded);
  };

    /**
   * generate random number in relation to the inputs min/max
   * @param {string} newExcuseText  message user
   */
  const addNewExcuse = (newExcuseText) => {
    HomePageController.pushNewExcuse(newExcuseText).then((newExcuseList) => {
        setExcuseList(newExcuseList);
        setModalIsActive(false);
        setCurrentIdExcuse(newExcuseList.length -1)
    })
  }

    /**
   * Change boolean to active or desactive modal AddNewExcuse
   */
  const displayModalAddNewExcuse = () =>{
    setModalIsActive(!modalIsActived);
  }
 

  return (
    <div className={`home_container ${homeAnimation}`}>
      <h1 className="home_title">Excuses de dev</h1>   
      <div className="container"> 
      {(excusesList.length > 0 && !isLoaded) && ( 
        <div className="excuse_card">
          <ExcuseCard> 
              <p>{excusesList[currentIdExcuse].message}</p>
          </ExcuseCard>
        </div>
       )}
       {isLoaded && 
             <div className="loader">
                <Loader />
             </div>
        }
            <ActionButton label="Une excuse ! une excuse, encore une !!" functionOnClick={getOneNewExcuse}/>
            <ActionButton label="Je veux creer une excuse !!" functionOnClick={displayModalAddNewExcuse}/>
       </div>

        {modalIsActived && 
            <ModalAddExcuse onEcuseSubmit={addNewExcuse} onClose={displayModalAddNewExcuse}></ModalAddExcuse>
        }
     </div>
  );
};

export default HomePage;