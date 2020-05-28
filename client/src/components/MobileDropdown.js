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
        <DropdownItem>About</DropdownItem>
        <DropdownItem>Portfolio</DropdownItem>
        <DropdownItem>Contact</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default MobileDropdown;