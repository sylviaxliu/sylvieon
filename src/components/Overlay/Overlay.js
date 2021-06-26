import React from 'react';
import { bool } from 'prop-types';
import { StyledOverlay } from './Overlay.styled';

const Overlay = ({ open }) => {
  return (
    <StyledOverlay open={open}>
    </StyledOverlay>
  )
}
Overlay.propTypes = {
  open: bool.isRequired,
}
export default Overlay;