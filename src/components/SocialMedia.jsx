import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconsContainer from '../UI/Footer/IconsContainer'
import SocialIcon from '../UI/SocialIcon'

const SocialMedia = () => {
  return (
    <IconsContainer>
      <SocialIcon bg="#3B5999" href='' target="_blank">
        <FacebookRoundedIcon />
      </SocialIcon>
      <SocialIcon bg="#E4405F" href='' target="_blank">
        <InstagramIcon />
      </SocialIcon>
      <SocialIcon bg="#0a66c2" href="https://www.linkedin.com/in/ahmed-anwer24" target="_blank">
        <LinkedInIcon />
      </SocialIcon>
      <SocialIcon bg="#000" href="https://github.com/AhmedAnwarSaberMoustafa" target="_blank">
        <GitHubIcon />
      </SocialIcon>
    </IconsContainer>
  )
}

export default SocialMedia