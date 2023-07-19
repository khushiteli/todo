import React from 'react'
import { Link } from 'react-router-dom';

const CencleBtn = () => {
  return (
    <Link to="/">
      <button
        title="cancel"
        className="h-[40px] w-[40px] bg-red text-white rounded-full text-2xl flex justify-center items-center close-btn"
      >
        <i className="fa fa-close"></i>
      </button>
    </Link>
  );
}

export default CencleBtn
