import React from "react";
import './Pagination.css'

export default function Pagination({ goToNextPage, goToPreviousPage }) {
  return (
    <div className='pagination-container'>
      {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
}
