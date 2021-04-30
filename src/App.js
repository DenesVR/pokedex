import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Grid from "./components/Grid";
import Pagination from "./components/Pagination";
import Detail from "./components/Detail";
import useSWR from "swr";

//const fetcher = url => axios.get(url).then(res => res.data);

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  useEffect(() => {
    //GET REQUEST
    axios(page)
      .then(Response => {
        console.log(Response.data);
        setPokemons(Response.data.results);
        setNext(Response.data.next);
        setPrevious(Response.data.previous);
      })
      .catch(error => {});
  }, [page]);

  function nextPage() {
    setPage(next);
  }

  function previousPage() {
    setPage(previous);
  }

  //const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon`, fetcher);
  //console.log(data);

  return (
    <Router>
      <Switch>
        <Route path="/:name">
          <Detail />
        </Route>
        <Route path="/">
          <Pagination
            previousPage={previous ? previousPage : null}
            nextPage={next ? nextPage : null}
          />
          <Grid pokemons={pokemons} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
