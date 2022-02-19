import React, { useState } from "react";
import { LazyImage } from "../lazyImage/lazyImage";
import style from "./modalCharacter.module.css";

export const ModalCharacter = ({ character, setModal }) => {
  const [isClosed, setClose] = useState(false);

  const transitionWrapper = () => {
    setClose(true);
  };

  const closeModal = () => {
    if (isClosed) {
      setModal({ opened: false, character: null });
    }
  };

  return (
    <div
      onAnimationEnd={closeModal}
      className={style.modalWrapper.concat(
        isClosed ? " " + style.closeModal : ""
      )}
    >
      <div className={style.modalBlock}>
        <button
          onClick={transitionWrapper}
          className={style.crossClose}
        ></button>
        <LazyImage image={character.image} name={character.name} />
        <p className={style.name}>{character.name}</p>
        <p className={style.stats}>Gender: {character.gender}</p>
        <p className={style.stats}>Species: {character.species}</p>
        <p className={style.stats}>Last Location: {character.location.name}</p>
        <p className={style.stats}>Origin: {character.origin.name}</p>
        <div
          style={
            character.status === "Alive"
              ? { backgroundColor: "green" }
              : character.status === "Dead"
              ? { backgroundColor: "red" }
              : { backgroundColor: "gray" }
          }
          className={style.status}
        >
          {character.status}
        </div>
      </div>
    </div>
  );
};
