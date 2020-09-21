import React from 'react';
import SHOP_DATA from '../../pages/shop/shop.data'

const BasinSpecs = (props) => {
  const id = props.match.params.id
  const data = SHOP_DATA[2]

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

    return(
      <div>
        {resultname} <br />
        {resultdescription} <br />
        {resultavailability}
      </div>
    )
}


export default BasinSpecs