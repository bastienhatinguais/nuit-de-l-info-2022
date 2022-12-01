import React, { useState } from 'react';
import { Container, Chip} from '@mui/material';

function Score() {
    const [score, setScore] = useState(0);
    const handleClickPlus = () => setScore(score+1);
    const handleClickMinus = () => setScore(score-1);

  return (
    <Container>
    <Chip label={score} />
    <Chip label="+1" onClick={handleClickPlus} />
    <Chip label="-1" onClick={handleClickMinus} />
    </Container>
  );
}

export default Score;
