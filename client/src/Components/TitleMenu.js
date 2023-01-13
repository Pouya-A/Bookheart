import { React, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { ContextPort } from "../context/context";

const TitleMenu = () => {
  const {
    menuModalOpen,
    isMenuModal,
    restBookTitle,
    target,
    onClickActiveClass,
  } = useContext(ContextPort);
  return (
    <div className={isMenuModal === true ? "menu-title active" : "menu-title"}>
      <div className=" w-100 container-fluid d-flex justify-content-end close-btn">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="close-btn mb-3"
          size="lg"
          onClick={menuModalOpen}
        />
      </div>
      <ul className="menu-title-items row d-xl-flex flex-xl-column">
        {restBookTitle?.map((tab) => (
          <li
            className={
              target === tab
                ? "menu-item active  col-lg col-md"
                : "menu-item col-lg col-md"
            }
            onClick={onClickActiveClass}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TitleMenu;
