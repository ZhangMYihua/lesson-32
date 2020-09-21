import React from 'react';
import SHOP_DATA from '../../pages/shop/shop.data'

const TapSpecs = (props) => {
  const id = props.match.params.id
  const data = SHOP_DATA[3]

  const targetID = id;

  const resultname = data.items
    .filter(e => e.name === targetID)
    .map(p => p.name);

  const resultdescription = data.items
    .filter(e => e.name === targetID)
    .map(p => p.description);
    
  const resultavailability = data.items
    .filter(e => e.name === targetID)
    .map(p => p.availability);

  const result = data.items
    .filter(e => e.name === targetID)
    .map(p => p);
  
    return(
      <div>
        {resultname} <br />
        {resultdescription} <br />
        {resultavailability} <br />
      </div>
    )
}


export default TapSpecs