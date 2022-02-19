import React from "react";
import { Filter } from "./filter/filter";

export const InputSearch = ({ search, setSearch, setFilter, filter }) => {
  return (
    <header>
      <h1>
        <span style={{ color: "#69a5e5" }}>Rick</span> &{" "}
        <span style={{ color: "rgb(98 255 133)" }}>Morty</span> / Characters
      </h1>
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Enter character name..."
      ></input>
      <Filter setFilter={setFilter} filter={filter} />
    </header>
  );
};
