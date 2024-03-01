import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import SearchBox from '../../components/SearchBox.jsx';
import { PostSearch } from '../../components/PostSearch.jsx';
import Styles from './styles.module.css';
import Grid from '@mui/material/Unstable_Grid2';

function Explore() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <Navbar />
      <br />
      <div className={Styles.container}>
        <SearchBox onSearch={handleSearch} />
      </div>
      <div className={Styles.container}>
        <div className={Styles.post}>
          <PostSearch searchText={searchText} />
        </div>
      </div>
    </>
  );
}

export default Explore;
