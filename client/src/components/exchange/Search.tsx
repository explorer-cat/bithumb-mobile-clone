import './Search.css';
import '../../stylesheets/initialization.css'
import { Skeleton } from '@mui/material';
import React, {useEffect, useState} from 'react';

interface SearchType {
    inputValue : any,
}

function Search({inputValue} : SearchType) {

    const handleKeyPress = (e:any) => {
        console.log("e.target.value",e.target.value)
        inputValue(e.target.value)
    }
    return (
      <span className = "navBar_search-box">
        <div className = "publicInput">
          <div className = "search-icon"></div>
          <input className = "search-input-box" onChange={handleKeyPress}  placeholder='코인명/심볼검색'/>
        </div>
      </span>
  );
  // }
}

export default Search;
