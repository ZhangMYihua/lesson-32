import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export const DropdownFilter = ({collection}) => {
  const {filtertypes} = collection;
  return (
  <DropdownButton variant="info" id= "dropdown-basic-button" title="Filter">
      {filtertypes.map(furniture => {
           return (
             <Dropdown.Item href = {`/shop/${collection.routeName}/${furniture}`} value={furniture}> {furniture} </Dropdown.Item>
           )
         })}
  </DropdownButton> 
    
  )
}

