import React from "react";
import "./pagination.css";
const Pagination = ({
  handlePreviousPage,
  handleNextPage,
  currentPage,
  totalPage,
}) => {
  return (
    <div className="paginationDiv">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPage}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
