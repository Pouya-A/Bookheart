import React, { createContext, useEffect } from "react";
import Axios from "axios";
import { useState } from "react/cjs/react.development";
import { skillsData } from "../context/Data";

export const ContextPort = createContext();

export const ContextPortProvider = (props) => {
  const [finalItem, setfinalItem] = useState();
  const [portfolioPicData, setPortfolioPicData] = useState([]);
  const [error, setError] = useState(false);
  const [target, setTarget] = useState("All");
  const [isModal, setIsModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const [changedWord, setChangedWord] = useState("");
  const [bookTitle, setBookTitle] = useState();
  const [restBookTitle, setRestBookTitle] = useState();
  const [activeRestMenu, setActiveRestMenu] = useState(false);

  const modalOpen = () => {
    setIsModal(!isModal);
  };
  const menuModalOpen = () => {
    setIsMenuModal(!isMenuModal);
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/bookapi/getbook").then((response) => {
      setfinalItem(response.data);
      setPortfolioPicData(response.data);
    });

    Axios.get("http://localhost:3001/bookapi/gettitlename").then((response) => {
      if (response.data.length > 5) {
        setBookTitle(response.data.slice(0, 4));
        setRestBookTitle(response.data.slice(4, response.data.length));
      } else {
        setBookTitle(response.data);
      }
    });
  }, []);

  const onClickActiveClass = (e) => {
    e.stopPropagation();
    const Target = e.target.innerText;
    setTarget(Target);
    if (restBookTitle.includes(Target)) {
      setActiveRestMenu(true);
    } else {
      setActiveRestMenu(false);
    }
    //////filter condition
    if (Target === "All") {
      setfinalItem(portfolioPicData);
      setIsMenuModal(false);
    } else {
      let newSet = portfolioPicData.filter((item) => item.title === Target);
      setfinalItem(newSet);
      setIsMenuModal(false);
    }
  };

  //Search Stuff
  // const changedSearchedWordInput = (e) => {
  //   setChangedWord(e.target.value);
  // };

  const searchClick = () => {
    let newItem = portfolioPicData.filter((i) => {
      return i.name
        .toLowerCase()
        .trim()
        .includes(changedWord.toLowerCase().trim());
    });

    if (newItem.length === 0) {
      setError(true);
    } else {
      setError(false);
      setfinalItem(newItem);
    }
  };
  //////////////////////////////

  //Modal

  ////////////////////
  const getSinglePorfolio = (id) => {
    const single = finalItem.find((item) => item.id === parseInt(id));
    return single;
  };
  return (
    <ContextPort.Provider
      value={{
        portfolioPicData,
        bookTitle,
        setBookTitle,
        restBookTitle,
        onClickActiveClass,
        target,
        finalItem,
        isModal,
        modalOpen,
        skillsData,
        setIsModal,
        changedWord,
        searchClick,
        getSinglePorfolio,
        error,
        setError,
        setChangedWord,
        menuModalOpen,
        isMenuModal,
        setIsMenuModal,
        activeRestMenu,
      }}
    >
      {props.children}
    </ContextPort.Provider>
  );
};
