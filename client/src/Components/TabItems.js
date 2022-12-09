import React, { useContext, useEffect, useState } from "react";
import { ContextPort } from "../context/context";

const TabItems = () => {
  const {
    bookTitle,
    restBookTitle,
    target,
    changedWord,
    searchClick,
    setChangedWord,
    onClickActiveClass,
    menuModalOpen,
    activeRestMenu,
  } = useContext(ContextPort);

  // const isMatch = (element) => {
  //   element === target;
  // };
  // const activateRestMenu = () => {
  //   if (restBookTitle.contains(target)) {
  //     setActiveRestMenu(true);
  //   } else {
  //     setActiveRestMenu(false);
  //   }
  // };
  return (
    <div className="items">
      <div className="container-fluid">
        <div className="row">
          <div className="category col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  d-flex flex-wrap row-gap-2  justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center">
            {!bookTitle ? (
              <ul className="category-items-content">
                <li className="item active" onClick={onClickActiveClass}>
                  All
                </li>
              </ul>
            ) : (
              <ul className="category-items-content ">
                {bookTitle.map((tab) => (
                  <li
                    className={target === tab ? "item active" : "item"}
                    onClick={onClickActiveClass}
                  >
                    {tab}
                  </li>
                ))}
                {restBookTitle && (
                  <li className="menu" onClick={menuModalOpen}>
                    {/* menu logo */}
                    <div className="menu-icon d-flex">
                      <div
                        className={
                          activeRestMenu === true
                            ? "menu-circle active"
                            : "menu-circle"
                        }
                      ></div>
                      <div
                        className={
                          activeRestMenu === true
                            ? "menu-circle active"
                            : "menu-circle"
                        }
                      ></div>
                      <div
                        className={
                          activeRestMenu === true
                            ? "menu-circle active"
                            : "menu-circle"
                        }
                      ></div>
                    </div>
                    {/* menu */}
                  </li>
                )}
              </ul>
            )}
          </div>
          {/* -----------------search input---------------- */}
          <div className="search-bar col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center">
            <input
              type="text"
              value={changedWord}
              onChange={(e) => {
                setChangedWord(e.target.value);
              }}
              placeholder="Search"
              className="py-1"
            />
            <button
              onClick={searchClick}
              className="btn py-2 px-4 btn-dark fw-bold rounded-0 bookbtn"
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabItems;
