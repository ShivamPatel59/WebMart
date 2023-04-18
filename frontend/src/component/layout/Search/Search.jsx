import React from 'react'
import "./Search.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = () => {
  return (
    <div className='search'>
        <SearchOutlinedIcon sx={{ color: 'black' }} className='search-icon' fontSize='medium'/>
        <input type="text" placeholder='Search' className='search-box' />
    </div>
  )
}

export default Search