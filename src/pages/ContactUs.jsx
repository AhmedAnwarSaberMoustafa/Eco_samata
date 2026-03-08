import { MailOutline, Phone } from '@mui/icons-material';
import { TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SocialMedia from '../components/SocialMedia';
import Container from '../UI/Containers/Container'
import ContactItem from '../UI/Footer/ContactItem';
import Title from '../UI/Title'
import Button from '../UI/Button';
import { small } from '../responsive';
import API_BASE_URL from '../api_route';


const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem 2rem;
  margin: 5rem 0;
  ${small(
  {
    margin: 0,
    padding: '2rem 1rem'
  }
)}
  & .up{
    width: calc(50% - 1rem);
    margin: 0 1rem 0 0;
  }
  & .message {
    width: 97%;
    margin: 2rem 0;
  }
  & .message .MuiInputBase-input{
    height: 100px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  ${small(
  {
    flexDirection: 'column',
    alignItem: 'center',
    justifyContent: 'center',
    gap: 0
  }
)}
`
const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const onChangeNameHandler = (e) => {
    setName(prev => e.target.value)
  }
  const onChangeEmailHandler = (e) => {
    setEmail(prev => e.target.value)
  }
  const onChangeMessageHandler = (e) => {
    setMessage(prev => e.target.value)
  }
  const sendMessage = async () => {
    try {
      const req = await fetch(API_BASE_URL + "/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      })
      await req.json()
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      console.log(e)
    }

  }
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <InfoContainer>
          <Title style={{ fontSize: 50, margin: '0 0 2rem' }}>Contact Us</Title>
          <Title>Get in touch</Title>
          <ContactItem style={{ fontWeight: 600 }}>
            <Phone />
            01126989864
          </ContactItem>
          <ContactItem style={{ fontWeight: 600 }}>
            <MailOutline />
            devahmedanwer@gmail.com
          </ContactItem>
          <SocialMedia />
        </InfoContainer>
        <InfoContainer>
          <TextField
            id="name"
            value={name}
            label="Name"
            variant="outlined"
            className='up'
            onChange={onChangeNameHandler}
            required
          />
          <TextField
            id="email"
            value={email}
            label="Email"
            variant="outlined"
            className='up'
            onChange={onChangeEmailHandler}
            required
          />
          <Textarea
            disabled={false}
            minRows={6}
            placeholder="Message"
            id="Message"
            variant="outlined"
            className="message"
            onChange={onChangeMessageHandler}
            value={message}
          />
          <Button onClick={sendMessage}>Send</Button>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default ContactUs