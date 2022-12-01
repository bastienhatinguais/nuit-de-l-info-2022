import { Box, Button, TextField, Grid } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { api } from '../../utils/api';
import{ Configuration, OpenAIApi } from "openai";

function TestOpenAi() {
  const [texte, setTexte] = useState('');
  const [image, setImage] = useState("")
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const getImage = async ()=>{
    const response = await openai.createImage({
        prompt: texte,
        n: 1,
        size: "1024x1024",
      });
      return response
  }
 
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      
      <TextField
        required
        id="outlined-required"
        label="Texte"
        onChange={(e) => setTexte(e.target.value)}
        multiline
        row={4}
      />
      <img src={image} alt="Image généréé"/>
      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          color="success"
          onClick={() => {
            getImage().then((response)=>{
                console.log("REPONSE:",response)
                setImage(response.data.data[0].url)
            })
          }}
        >
          Envoyer
        </Button>
      </Grid>
    </Box>
  );
}

export default TestOpenAi;
