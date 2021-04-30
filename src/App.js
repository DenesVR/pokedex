import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Grid from "./components/Grid";
import Pagination from "./components/Pagination";
import Detail from "./components/Detail";
import { ChakraProvider, SimpleGrid, Box } from "@chakra-ui/react";

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

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/:name">
            <Detail />
          </Route>
          <Route path="/">
            <SimpleGrid columns={3} spacing={10}>
              <Box></Box>
              <Box textAlign="center" fontSize="xl">
                <Grid pokemons={pokemons} />
                <Pagination
                  previousPage={previous ? previousPage : null}
                  nextPage={next ? nextPage : null}
                />
              </Box>
              <Box></Box>
            </SimpleGrid>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
