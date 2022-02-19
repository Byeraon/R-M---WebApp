import React from "react";
import { Card } from "./card/card";
import style from "./cardsWrapper.module.css";
import { Pagination } from "./pagination/pagination";

export const CardsWrapper = ({
  results,
  pageNumber,
  info,
  updatePageNumber,
  setModal,
}) => {
  return (
    <main>
      <div className={style.cardsPlace}>
        {!!results ? (
          results.map((el) => (
            <Card key={el.name + el.id} setModal={setModal} el={el} />
          ))
        ) : (
          <div className={style.preloader}></div>
        )}
      </div>
      {info && (
        <Pagination
          currentPage={pageNumber}
          info={info}
          setCurrentPage={updatePageNumber}
        />
      )}
    </main>
  );
};
