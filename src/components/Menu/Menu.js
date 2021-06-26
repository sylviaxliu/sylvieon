import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const Menu = ({ open }) => {
  return (
    <StyledMenu  open={open}>
      <a href="/">
        sylvia liu
      </a>
      <a href="/about">
        about
      </a>
      <a href="/projects">
        projects
        </a>
      <a href="/contact">
        contact
        </a>
      
      <div class="links-container">
        <a href="/">
            <AttachFileIcon fontSize="small" />
        </a>
        <a href="/">
            <MailOutlineIcon fontSize="small" />
        </a>
        <a href="/">
            <LinkedInIcon fontSize="small" />
        </a>
        <a href="/">
            <GitHubIcon fontSize="small" />
        </a>
      </div>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;