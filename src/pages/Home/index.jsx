import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import { Post } from '../../components/Post.jsx';
import Styles from './styles.module.css';

function Home() {

  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.post}>
            <Post/>
        </div>
      </div>
    </>
  );
}

export default Home;
