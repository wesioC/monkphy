import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CopyURLButton from './CopyButton';
import FavoriteButton from './FavoriteButton';

const StyledCard = styled(Card)({
  maxWidth: 500,
  width: '100%',
  margin: 'auto',
  '@media (max-width: 700px)': {
    maxWidth: 330,
    marginLeft: 22,
  },
  '@media (min-width: 600px)': {
    maxWidth: 450,
  },
  '&.MuiPaper-root': {
    bgcolor: 'background.default',
    color: 'text.primary',
  },
});


// eslint-disable-next-line react/prop-types
export function PostSearch({ searchText }) {
  const [gifData, setGifData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      // Verifica se há texto de pesquisa
      if (!searchText) {
        // Se não houver texto, limpa os dados
        setGifData(null);
        return;
      }

      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=2vptxvz40eORMh8IH8Y03knfva5ZRaQ1&q=${searchText}&limit=25&offset=0&rating=r&lang=en&bundle=messaging_non_clips`);
        const data = await response.json();
        setGifData(data.data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar GIF:', error);
      }
    };

    fetchData();
  }, [searchText]); // Executa o efeito sempre que o searchText mudar

  const TimePosted = (importDatetime) => {
    const dataAtual = new Date(); // Obtém a data atual
    const dataPublicacao = new Date(importDatetime); // Converte a data de publicação para um objeto de data

    // Calcula a diferença entre as datas em milissegundos
    const diferencaEmMilissegundos = dataAtual - dataPublicacao;

    // Converte a diferença para dias, horas, minutos, segundos
    const segundos = Math.floor(diferencaEmMilissegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(meses / 12);

    // Retorna o tempo decorrido formatado
    if (anos > 0) {
      return `${anos}a`;
    } else if (meses > 0) {
      return `${meses}m`;
    } else if (dias > 0) {
      return `${dias}d`;
    } else if (horas > 0) {
      return `${horas}h`;
    } else if (minutos > 0) {
      return `${minutos}min`;
    } else {
      return `agora`;
    }
  };

  // Se não houver gifData ou searchText for vazio, retorna nulo
  if (!gifData || !searchText) {
    return null;
  }

  return (
    <>
      {gifData.map((gif) => (
        <StyledCard key={gif.id} sx={{marginTop:2}}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={gif.user && gif.user.avatar_url ? gif.user.avatar_url : '/src/assets/avatar.png'}
              >
                {gif.user && gif.user.username ? gif.user.username.charAt(0).toUpperCase() : gif.username = 'Anônimo'}
              </Avatar>
            }
            title={gif.username}
            subheader={TimePosted(gif.import_datetime)}
          />
          <CardMedia
            component="img"
            height="auto"
            image={gif.images.original.url}
            alt="GIF"
          />
          <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
            <div>
              <FavoriteButton />
              
              <CopyURLButton urlToCopy={gif.images.original.url} />

            </div>
            <IconButton aria-label="share">
              <BookmarkBorderOutlinedIcon />
            </IconButton>
          </CardActions>
        </StyledCard>
      ))}
    </>
  );
}
