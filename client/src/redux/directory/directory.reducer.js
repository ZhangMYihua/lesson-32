const INITIAL_STATE = {
  sections: [
      {
        title: 'Furnitures',
        imageUrl: 'https://i.ibb.co/jG6vPds/Furnitures.jpg',
        id: 1,
        linkUrl: 'shop/furnitures'
      },
      {
        title: 'Sanitary',
        imageUrl: 'https://i.ibb.co/CJ766jJ/Sanitary.jpg',
        id: 2,
        linkUrl: 'shop/supplies'
      },
      {
        title: 'Decoration',
        imageUrl: 'https://i.ibb.co/KWhFbnn/Decoration.jpg',
        id: 3,
        linkUrl: 'shop/basin'
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