import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './index.css'

export const Cabecalho = () => {
  return (
    <div className='cabecalho'>
      <Avatar src="/suco.jpg" alt="suco" />
      <div className='texto'>
        <Typography variant="subtitle2" gutterBottom>
          <b>Suco</b>
      </Typography>
        <Typography variant="body2" gutterBottom>
          Localiza ai bb
      </Typography>
      </div>
    </div>
  );
}