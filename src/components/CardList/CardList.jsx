import './CardList.css';
import CardItem from 'components/CardItem';
import { useContext } from 'react';
import { Context } from 'components/ContainerContent/ContainerContent';
import { nanoid } from 'nanoid';

export default function CardList() {
  const id = nanoid();
  const cardItems = useContext(Context);
  return (
    <ul className="container__list">
      {cardItems.map(item => (
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
