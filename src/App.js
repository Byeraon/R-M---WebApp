import "./App.css";
import { InputSearch } from "./components/inputSearch/inputSearch";
import { CardsWrapper } from "./components/cardsWrapper/cardsWrapper";
import { useEffect, useState } from "react";
import { ModalCharacter } from "./components/modalCharacter/modalCharacter";

function App() {
  const [pageNumber, updatePageNumber] = useState(1);
  const [modal, setModal] = useState({
    opened: false,
    character: null,
  });
  const [filter, updateFilter] = useState({
    status: "",
    gender: "",
    species: "",
  });
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${filter.status}&gender=${filter.gender}&species=${filter.species}`;

  const setFilter = (option, type) => {
    updateFilter((prevstate) => ({
      ...prevstate,
      [type]:
        option === Object.values(filter)[Object.keys(filter).indexOf(type)]
          ? ""
          : option,
    }));
  };

  const openModal = (character) => {
    setModal({ opened: true, character: character });
  };

  useEffect(() => {
    const handler = setTimeout(async function () {
      let data = await fetch(api).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return {
            info: null,
            results: [
              {
                gender: "50/50 :)",
                species: "Site",
                name: "Error",
                status: "Dead",
                location: { name: "Netlify" },
                origin: { name: "In the house of Nikita Krasnov :(" },
              },
            ],
          };
        }
      });
      updateFetchedData(data);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [api]);

  useEffect(() => {
    const handler = setTimeout(async function () {
      updateFetchedData({ info: null, results: null });
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [pageNumber]);

  useEffect(() => {
    updatePageNumber(1);
    updateFetchedData({ info: null, results: null });
  }, [search, filter]);

  return (
    <div className="App">
      {modal.opened && (
        <ModalCharacter character={modal.character} setModal={setModal} />
      )}
      <InputSearch
        search={search}
        setSearch={setSearch}
        setFilter={setFilter}
        filter={filter}
      />
      <CardsWrapper
        setModal={openModal}
        results={results}
        pageNumber={pageNumber}
        info={info}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
}

export default App;
