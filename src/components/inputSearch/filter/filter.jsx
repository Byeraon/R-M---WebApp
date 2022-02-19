import React, { useState } from "react";
import style from "./filter.module.css";

export const Filter = ({ setFilter, filter }) => {
  const [isOpened, setOpen] = useState(false);
  const filterTypes = {
    gender: ["female", "male", "genderless", "unknown"],
    status: ["Alive", "Dead", "Unknown"],
    species: [
      "Human",
      "Alien",
      "Humanoid",
      "Poopybutthole",
      "Mythological",
      "Unknown",
      "Animal",
      "Disease",
      "Robot",
      "Cronenberg",
      "Planet",
    ],
  };

  const toggleOpen = () => {
    setOpen((prevstate) => !prevstate);
  };

  return (
    <div className={style.parentFilter}>
      <div
        style={isOpened ? { maxHeight: "400px" } : {}}
        className={style.filter}
      >
        {Object.values(filterTypes).map((type, typeId) => (
          <div
            key={typeId + type}
            style={isOpened ? {} : { maxHeight: 0 }}
            className={style.block}
          >
            <div style={!isOpened ? { opacity: 0 } : {}} className={style.type}>
              {Object.keys(filterTypes)[typeId]}
            </div>
            {type.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setFilter(option, Object.keys(filterTypes)[typeId]);
                }}
                className={
                  Object.keys(filter).filter(
                    (el, i) =>
                      el === Object.keys(filterTypes)[typeId] &&
                      Object.values(filter)[i] === option
                  ).length > 0
                    ? style.active
                    : null
                }
              >
                {option}
              </button>
            ))}
          </div>
        ))}
      </div>
      <button onClick={toggleOpen} className={style.toggle}>
        <div
          style={isOpened ? { transform: "scale(-1, -1)" } : {}}
          className={style.arrow}
        ></div>
      </button>
    </div>
  );
};
