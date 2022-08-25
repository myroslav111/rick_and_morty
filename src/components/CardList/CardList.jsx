import './CardList.css';
import CardItem from 'components/CardItem';
// import Skeleton from '@mui/material/Skeleton';
import { useSelector } from 'react-redux';
import { getCharacters, getFilterValue } from '../../redux/charactersSlice';
// import { useContext } from 'react';
// import { Context } from 'components/ContainerContent/ContainerContent';
// import { nanoid } from 'nanoid';
// import { useGetCharactersQuery } from '../../redux/rtkQuery';

export default function CardList() {
  // const cardItems = useContext(Context);
  const characters = useSelector(getCharacters);
  const getFilterValueFromState = useSelector(getFilterValue);

  const getVisibleContact = (allCharacters, filterVal) => {
    const normalizeFilter = filterVal.toLowerCase();
    return allCharacters.filter(character =>
      character.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredCharacters = getVisibleContact(
    characters,
    getFilterValueFromState
  );

  return (
    <ul className="container__list">
      {filteredCharacters?.map(item => (
        <CardItem
          key={item.id}
          img={item.image}
          name={item.name}
          species={item.species}
          location={item.location.name}
          created={item.created}
          episode={item.episode}
          id={item.id}
        />
      ))}
    </ul>
  );
}
