import './CardList.css';
import CardItem from 'components/CardItem';
// import Skeleton from '@mui/material/Skeleton';
import { useSelector } from 'react-redux';
import { getCharacters } from '../../redux/charactersSlice';
// import { useContext } from 'react';
// import { Context } from 'components/ContainerContent/ContainerContent';
// import { nanoid } from 'nanoid';
// import { useGetCharactersQuery } from '../../redux/rtkQuery';

export default function CardList() {
  // const cardItems = useContext(Context);
  const characters = useSelector(getCharacters);

  // const { data, isLoading } = useGetCharactersQuery();
  // const characters = data?.results;

  return (
    <ul className="container__list">
      {characters?.map(item => (
        <CardItem
          key={item.id}
          img={item.image}
          name={item.name}
          species={item.species}
          location={item.location.name}
          created={item.created}
          episode={item.episode}
        />
      ))}
    </ul>
  );
}
