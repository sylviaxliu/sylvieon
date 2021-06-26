import React, { useState, useRef } from "react"
import { useDetectOutsideClick } from './useDetectOutsideClick.js';
import Burger from "./Burger"
import Menu from "./Menu"
import Overlay from "./Overlay"
import "../styles/sidenav.scss"

export default function SideNav() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);  

    const [open, setOpen] = useState(false);

    return (
      <div>
        <div class="button-container">
            <Burger open={open} setOpen={setOpen} />
        </div>
        <div class="menu-container">
            <Menu open={open} setOpen={setOpen} />
        </div>
        <Overlay open={open} setOpen={setOpen} />
      </div>
    );
  };
