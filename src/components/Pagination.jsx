import React from "react";
import { Button } from "@chakra-ui/react";

function Pagination({ previousPage, nextPage }) {
  return (
    <div>
      {previousPage && <Button onClick={previousPage}>Previous</Button>}
      {nextPage && <Button onClick={nextPage}>Next</Button>}
    </div>
  );
}

export default Pagination;
