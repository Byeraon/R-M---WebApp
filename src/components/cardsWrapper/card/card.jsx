import React from "react";
import { LazyImage } from "../../lazyImage/lazyImage";
import style from "./card.module.css";

export const Card = ({ el, setModal }) => {
  const openModal = () => {
    setModal(el);
  };

  return (
    <div onClick={openModal} className={style.card}>
      <p
        style={
          el.status === "Alive"
            ? { backgroundColor: "green" }
            : el.status === "Dead"
            ? { backgroundColor: "red" }
            : { backgroundColor: "gray" }
        }
        className={style.status}
      >
        {el.status.toUpperCase()}
      </p>
      <LazyImage image={el.image} name={el.name} />

      <div className={style.infoBlock}>
        <p className={style.name}>{el.name}</p>
        <p>Last location</p>
        <p>{el.location.name}</p>
      </div>
    </div>
  );
};
