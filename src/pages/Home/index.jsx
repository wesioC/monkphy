import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import { Post } from '../../components/Post.jsx';
import Styles from './styles.module.css';
import { Suggestion } from '../../components/Suggestion.jsx';

function Home() {
  return (
    <>

      <div className={Styles.container}>
        <div className={Styles.nav}>
          <Navbar />
        </div>
        <div className={Styles.post}>
          <Post />
        </div>
        <div className={Styles.suggestion}>
          <Suggestion />
        </div>
      </div>
    </>
  );
}

export default Home;
