import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';
import Tooltip from '@mui/material/Tooltip';

const CopyURLButton = ({ urlToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(urlToCopy)
      .then(() => {
        // URL copiada com sucesso
        setCopied(true);
        setTimeout(() => {
          // Resetar o estado após 2 segundos para remover a mensagem de sucesso
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy URL to clipboard:', error);
      });
  };

  return (
    <Tooltip title={copied ? 'Copiado!' : 'Copiar link GIPHY'}>
      <IconButton aria-label="share" onClick={handleCopyToClipboard}>
        <LaunchIcon />
      </IconButton>
    </Tooltip>
  );
};

export default CopyURLButton;
