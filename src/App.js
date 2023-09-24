import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import axios from "axios";
function App() {
  const [typeFilters, setTypeFilters] = useState([]);
  const [name, setName] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [itemByPagination, setItemsByPagination] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemToShow = 20;
  useEffect(() => {
    axios
      .get("http://localhost:3000/Types")
      .then((res) => setPokemonType(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = () => {
    var isType = false;
    var items = pokemonList.filter((item) =>
      item.name.english.toLowerCase().match(name.toLowerCase())
    );

    if (typeFilters.length > 0) {
      items = items.filter((item) => {
        isType =
          item.type.filter((type) => typeFilters.includes(type)).length > 0;
        if (isType) {
          return item;
        }
      });
    }

    setFilteredList(items);
    setItemsByPagination(items.slice(0, 20));
    setTotalPage(Math.ceil(items.length / 20));
    setCurrentIndex(20);
    setCurrentPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleNextPage = () => {
    setCurrentIndex((prev) => prev + itemToShow);
    setCurrentPage((prev) => prev + 1);
    setItemsByPagination(
      filteredList.slice(currentIndex, currentIndex + itemToShow)
    );
  };

  const handlePreviousPage = () => {
    let currentIndexTemp = currentIndex - 40;
    setCurrentIndex((prev) => prev - itemToShow);
    setCurrentPage((prev) => prev - 1);
    setItemsByPagination(
      filteredList.slice(currentIndexTemp, currentIndexTemp + itemToShow)
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/Pokemon")
      .then((res) => {
        setPokemonList(res.data);
        setFilteredList(res.data);
        setItemsByPagination(res.data.slice(0, 20));
        setTotalPage(Math.ceil(res.data.length / 20));
        setCurrentIndex(20);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <Header
        setTypeFilters={setTypeFilters}
        handleSearch={handleSearch}
        setName={setName}
        pokemonType={pokemonType}
        handleKeyPress={handleKeyPress}
      />
      <div>
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
        <PokemonList pokemonList={itemByPagination} pokemonType={pokemonType} />
      </div>
    </div>
  );
}

export default App;
