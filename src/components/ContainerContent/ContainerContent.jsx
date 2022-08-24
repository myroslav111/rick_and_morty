import './ContainerContent.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardList from 'components/CardList';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useGetCharactersNextPageQuery } from '../../redux/rtkQuery';
// import { useSelector } from 'react-redux';
// import { getCharacters } from '../../redux/charactersSlice';
// import { useState, createContext, useEffect } from 'react';

// import api from '../../service/api';

// export const Context = createContext([]);

const ContainerContent = () => {
  // const [items, setItems] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const { isLoading, isFetching } = useGetCharactersNextPageQuery(nextPage);
  // const { isLoading } = useGetCharactersQuery();
  const handleClick = () => {
    setNextPage(prevState => prevState + 1);
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await api.getCharacter();
  //       setItems(data.results);
  //       setNextPage(data.info.next);
  //     } catch (error) {
  //       console.log('something happend');
  //     }
  //   })();
  // }, []);

  // const handleClick = async () => {
  //   try {
  //     const data = await api.getNextPage(nextPage);
  //     setItems(prevState => [...prevState, ...data.results]);
  //     setNextPage(data.info.next);
  //   } catch (error) {
  //     console.log('something happend');
  //   }
  // };

  if (isLoading) return <p>Load...</p>;

  return (
    <>
      <CssBaseline />
      {/* <Context.Provider value={items}> */}
      <Container maxWidth="80%">
        <Box
          sx={{
            bgcolor: 'transparent',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '5px',
            paddingTop: '60px',
          }}
        >
          <CardList isFetching={isFetching} />
          <Button className="Button" variant="contained" onClick={handleClick}>
            fetch
          </Button>
        </Box>
      </Container>
      {/* </Context.Provider> */}
    </>
  );
};

export default ContainerContent;
