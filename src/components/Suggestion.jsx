import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const StyledCard = styled(Card)({
  maxWidth: 300,
  width: '100%',
  margin: 'auto',
  '@media (max-width: 700px)': {
    maxWidth: 300,
    marginLeft: 52,
  },
  '@media (min-width: 600px)': {
    minWidth: 100,
    maxWidth: 220,
  },
  '&.MuiPaper-root': {
    bgcolor: 'background.default',
    color: 'text.primary',
  },
});

export function Suggestion() {
  const [gifData, setGifData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=2vptxvz40eORMh8IH8Y03knfva5ZRaQ1&limit=5&offset=0&rating=g&bundle=messaging_non_clips');
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
    <>
      {gifData && gifData.map((gif) => (
        <StyledCard key={gif.id} sx={{ marginTop: 2 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={gif.user && gif.user.avatar_url ? gif.user.avatar_url : '/src/assets/avatar.png'}
              >
                {gif.user && gif.user.username ? gif.user.username.charAt(0).toUpperCase() : 'A'}
              </Avatar>
            }
            title={gif.user && gif.user.username ? gif.user.username : 'Anônimo'}
            subheader={gif.user && gif.user.display_name ? gif.user.display_name : ''}
          />
          
          <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
            {gif.user && gif.user.profile_url && (
              <Button variant="text" href={gif.user.profile_url} target="_blank">Ver perfil</Button>
            )}
            <div> 
              {gif.user && gif.user.instagram_url && (
                <IconButton aria-label="instagram" href={gif.user.instagram_url} target="_blank">
                  <InstagramIcon />
                </IconButton>
              )}
              {gif.user && gif.user.website_url && (
                <IconButton aria-label="site" href={gif.user.website_url} target="_blank">
                  <LanguageIcon />
                </IconButton>
              )}
            </div>
          </CardActions>
        </StyledCard>
      ))}
    </>
  );
}
