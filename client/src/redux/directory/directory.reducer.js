const INITIAL_STATE = {
  sections: [
      {
        title: 'Furnitures',
        imageUrl: 'https://i.ibb.co/1fyTZwP/Indoor-Teak-Study-Table.png',
        id: 1,
        linkUrl: 'shop/furnitures'
      },
      {
        title: 'Supplies',
        imageUrl: 'https://i.ibb.co/wWT8KRS/Baron-W368.png',
        id: 2,
        linkUrl: 'shop/supplies'
      },
      {
        title: 'Basin',
        imageUrl: 'https://i.ibb.co/tq4rjhD/A170-BLK-Vessel-Basin.png',
        id: 3,
        linkUrl: 'shop/basin'
      },
      {
        title: 'Tap',
        imageUrl: 'https://i.ibb.co/3765VnC/NTL2002-Tall-Mixer-Tap.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/tap'
      },
      {
        title: 'Home Decoration',
        imageUrl: 'https://i.ibb.co/SP1KGXL/Synthetic-Rattan-Hanging-Day-Bed.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/homedecor'
      }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      default:
          return state;
  }
}

export default directoryReducer