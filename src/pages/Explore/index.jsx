import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import { PostExplore } from '../../components/PostExplore.jsx';
import Styles from './styles.module.css';
import Grid from '@mui/material/Unstable_Grid2';

function Explore() {

  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.post}>
          <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(8)).map((_, index) => (
              <Grid xs={2} sm={3} md={3} key={index}>
                <PostExplore />
                <PostExplore />
                <PostExplore />
                <PostExplore />
                <PostExplore />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Explore;
