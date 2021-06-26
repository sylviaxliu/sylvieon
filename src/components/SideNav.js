import React, { useState, useRef } from "react"
import Burger from "./Burger"
import Menu from "./Menu"
import Overlay from "./Overlay"
import "../styles/sidenav.scss"

export default function SideNav() {

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
