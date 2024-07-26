import  { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar.jsx';
import { PostExplore } from '../../components/PostExplore.jsx';
import Styles from './styles.module.css';
import Grid from '@mui/material/Unstable_Grid2';

function Explore() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous loading (replace with actual data fetching logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Adjust timeout as needed
  }, []);

  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.loading} style={{ display: isLoading ? 'flex' : 'none' }}>
          <img src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" alt="Loading posts..." width="40rem" />
        </div>
        </div>
        <div className={Styles.container}>
        <div className={Styles.post} style={{ opacity: isLoading ? 0 : 1 }}>
          <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(8)).map((_, index) => (
              <Grid xs={2} sm={3} md={3} key={index}>
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
