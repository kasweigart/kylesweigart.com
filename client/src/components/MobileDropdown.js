import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const MobileDropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle outline color="info">
      ≡
      </DropdownToggle>
      <DropdownMenu>
        <a href="#about" style={{textDecoration: 'none'}}>
        <DropdownItem>About</DropdownItem>
        </a>
        <a href="#portfolio" style={{textDecoration: 'none'}}>
        <DropdownItem>Portfolio</DropdownItem>
        </a>
        <a href="#contact" style={{textDecoration: 'none'}}>
        <DropdownItem>Contact</DropdownItem>
        </a>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default MobileDropdown;