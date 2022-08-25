import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeCard } from 'redux/charactersSlice';
import './CardItem.css';

export default function CardItem({
  img,
  name,
  species,
  location,
  created,
  episode,
  id,
}) {
  const [visible, setVisible] = useState(false);
  const dataCreate = created.slice(0, 10);
  const dispatch = useDispatch();

  const episodes = arr => {
    const shortStr = arr.map(str => {
      if (str[str.length - 2] === '/') {
        return str.slice(str.length - 1, str.length);
      } else {
        return str.slice(str.length - 2, str.length);
      }
    });
    if (shortStr.length === 1) {
      return shortStr[0];
    }
    if (shortStr.length === 2) {
      return `${shortStr[0]} and ${shortStr[1]}`;
    }
    return `${shortStr[0]} to ${shortStr[shortStr.length - 1]}`;
  };

  const openMore = () => {
    setVisible(prevState => !prevState);
  };

  const episod = episodes(episode);

  // const handleClick = () => {};

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea component="div">
        <CardContent
          sx={{
            padding: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              onClick={() => dispatch(removeCard(id))}
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt="green iguana"
        />
        <div className="center">
          <UnfoldMoreIcon onClick={openMore} />
          {visible && (
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                species: {species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                location: {location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                created: {dataCreate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                episode: {episod}
              </Typography>
            </CardContent>
          )}
        </div>
      </CardActionArea>
    </Card>
  );
}
