import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import WatchList from "./components/WatchList";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovieHandler = (movie) => {
    setWatchList([...watchList, movie])
  }

  const removeMovieHandler = (movie) => {
    const newState = watchList.filter((movies) =>  {
      return movies !== movie
    } );
    setWatchList(newState)
  }

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={watchList}
          addMovie={addMovieHandler}
          removeMovie={removeMovieHandler}
        />
        <WatchList list={watchList} removeMovie={removeMovieHandler} />
      </main>
    </div>
  );
}

export default App;
