import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import './CardItem.css';

export default function CardItem({
  img,
  name,
  species,
  location,
  created,
  episode,
}) {
  const [visible, setVisible] = useState(false);
  const dataCreate = created.slice(0, 10);

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

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardContent sx={{ padding: 1 }}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
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
