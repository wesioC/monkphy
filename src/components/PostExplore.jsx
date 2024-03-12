import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const StyledCard = styled(Card)({
  maxWidth: 500,
  width: '100%',
  margin: 'auto',
  '@media (max-width: 700px)': {
    minWidth: 100,
    marginLeft: 0,
    marginTop: 15,
  },
  '@media (min-width: 600px)': {
    maxWidth: 200,
    height: 'auto',
    marginTop: 15,
    marginLeft: 120,
  },
  '&.MuiPaper-root': {
    bgcolor: 'background.default',
    color: 'text.primary',
  },
});



export function PostExplore() {
  const [gifData, setGifData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=2vptxvz40eORMh8IH8Y03knfva5ZRaQ1&tag=limit%3D30&rating=r');
        const data = await response.json();
        setGifData(data.data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar GIF:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledCard>
      {gifData && (
        <>
          <CardMedia
            component="img"
            image={gifData.images.original.url}
            alt="GIF"
            sx={{ maxWidth: 250, height: 150 }}
            
          />
          
        </>
      )}
    </StyledCard>
  );
}