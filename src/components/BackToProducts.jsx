import React from 'react'
import { useHistory } from 'react-router-dom'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import BackButton from '../UI/Product/BackButton';

function BackToProducts() {
  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  }
  return (
    <BackButton onClick={goBackHandler}>
      <KeyboardBackspaceRoundedIcon style={{ fontSize: "2.5rem", color: '#fff' }} />
    </BackButton>
  )
}

export default BackToProducts