import React, { useState, useEffect } from 'react';
import TableauPost from './post/TableauPost';
import { Container, Box, IconButton, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormPost from './post/FormPost';
import TestOpenAi from './testOpenAi/TestOpenAi';
import { api } from '../utils/api';

function Accueil() {
  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);


  const getPosts = () => {
    api()
      .get('post')
      .then((result) => {
        setPosts(result.data);
        console.log(result);
      })
      .catch((e) => console.log(e));
  };

  const deletePost = (id) => {
    api()
      .delete('post/' + id)
      .then((result) => {
        getPosts();
      });
  };

  const envoyerPost = ({ auteur, texte }) => {
    api()
      .post('post', { auteur, texte })
      .then((result) => {
        handleCloseModal();
        getPosts();
      })
      .catch((er) => {
        console.log(er);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container>
      <Typography variant="h3">Gestionnaire de post</Typography>
      <Box m={2} pt={3}>
        <TestOpenAi/>
      </Box>
      <Box align="right">
        <IconButton aria-label="create" color="success" size="large" onClick={handleOpenModal}>
          <AddCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajout d'un post
          </Typography>
          <Typography id="modal-modal-description">
            <FormPost envoyerPost={envoyerPost}></FormPost>
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}

export default Accueil;
