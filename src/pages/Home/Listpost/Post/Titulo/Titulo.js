import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './index.css'

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export const Titulo = () => {
  const classes = useStyles()
  return <div className='titulo'>
    <Avatar src='suco.jpg' className={classes.small} />
    <div className='escrita'>
      <Typography variant="body2" gutterBottom>
        Curtido por <b>renaneusou</b> e <b>outras 4.643 pessoas</b>
      </Typography>
    </div>
  </div>
};