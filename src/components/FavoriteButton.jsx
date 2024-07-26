import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <IconButton
      aria-label="add to favorites"
      onClick={toggleFavorite}
      color={isFavorite ? 'secondary' : 'default'}
      sx={{
        '&:active': {
          transform: 'scale(1.2)', // Reduz o tamanho do ícone quando clicado
        },
      }}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

export default FavoriteButton;
