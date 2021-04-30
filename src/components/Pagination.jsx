import React from "react";

function Pagination({ previousPage, nextPage }) {
  return (
    <div>
      {previousPage && <button onClick={previousPage}>Previous</button>}
      {nextPage && <button onClick={nextPage}>Next</button>}
    </div>
  );
}

export default Pagination;
