import React, { useState, useEffect } from 'react';
import { httpGet, httpPatch } from 'lib/http';

export const Dropdown = ({ label,userId,name }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(()=>{
    httpGet(`users/${userId}`)
    .then(user => {
         setIsOpen(user[`dropdown_${name}`])
         })
         .catch((error)=>{
            console.error(error);
         })
  },[userId,name])

  
  const onToggle = (e) => {
    setIsOpen(!isOpen);
  }

  return (<>
    <div className="dropdown">
      <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expended={isOpen} onClick={onToggle}>{label}</button>

      <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu dropdown-section`} aria-labelledby='dropdownButton' role="menu">
        <div>Items</div>
        <a href="/page1">Page 1</a>
        <DropdownItem href="/page2">Page 2</DropdownItem>
        <DropdownItem href="/page3">Page 3</DropdownItem>
        <DropdownItem href="/page4">Page 4</DropdownItem>
      </ul>

      <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu dropdown-section`}>
        <div>More items</div>
        <DropdownItem href="/page5">Page 5</DropdownItem>
        <DropdownItem href="/page9">Page 9</DropdownItem>
      </ul>
    </div>
  </>);
}

const DropdownItem = ({href,children }) => {
  return <a href={href}>{children}</a>;
}