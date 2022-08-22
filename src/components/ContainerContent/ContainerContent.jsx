import './ContainerContent.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardList from 'components/CardList';
import Button from '@mui/material/Button';
import { useState, createContext, useEffect } from 'react';
import api from '../../service/api';

export const Context = createContext([]);

const ContainerContent = () => {
  const [items, setItems] = useState([]);
  const [nextPage, setNextPage] = useState('second');

  useEffect(() => {
    (async () => {
      try {
        const data = await api.getCharacter();
        setItems(data.results);
        setNextPage(data.info.next);
      } catch (error) {
        console.log('something happend');
      }
    })();
  }, []);

  const handleClick = async () => {
    try {
      const data = await api.getNextPage(nextPage);
      setItems(prevState => [...prevState, ...data.results]);
      setNextPage(data.info.next);
    } catch (error) {
      console.log('something happend');
    }
  };

  return (
    <>
      <CssBaseline />
      <Context.Provider value={items}>
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
            <CardList />
            <Button
              className="Button"
              variant="contained"
              onClick={handleClick}
            >
              Contained
            </Button>
          </Box>
        </Container>
      </Context.Provider>
    </>
  );
};

export default ContainerContent;
