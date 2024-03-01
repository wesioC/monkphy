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
    marginLeft: 12,
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

function TimePosted(dataPublicacao) {
  const dataAtual = new Date(); // Obtém a data atual
  const dataPublicacaoObj = new Date(dataPublicacao); // Converte a data de publicação para um objeto de data

  // Calcula a diferença entre as datas em milissegundos
  const diferencaEmMilissegundos = dataAtual - dataPublicacaoObj;

  // Converte a diferença para dias, horas, minutos, segundos
  const segundos = Math.floor(diferencaEmMilissegundos / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 24);
  const anos = Math.floor(meses / 12);

  // Retorna o tempo decorrido formatado
  if (anos > 0) {
    return `${anos} a`;
  }
  else if (meses < 12) {
    return `${meses} m`;
  }
  else if (dias > 0 && dias < 30) {
    return `${dias} d`;
  } else if (horas > 0) {
    return `${horas} h`;
  } else if (minutos > 0) {
    return `${minutos} min`;
  } else {
    return `agora`;
  }
}

// Exemplo de uso
/* const dataPublicacao = '2024-02-26T12:00:00'; // Exemplo de data de publicação
const tempoDecorrido = calcularTempoDecorrido(dataPublicacao);
console.log(tempoDecorrido); // Saída: Publicado há 1 dia */

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