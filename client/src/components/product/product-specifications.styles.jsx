import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionSpecificationsContainer = styled.div`
  display: flex;
  flex-direction: row; 
  margin-left: 10vw;

`

export const CollectionItemContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 60%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: auto;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: auto;
  text-align: right;
`;

export const SpecDetailsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  // margin: auto;
  padding-left: 50px;
`
export const TitleContainer = styled.span`
  width: 300px;
  font-size: 25px;
  padding-bottom: 10px;
`;

export const PriceSideContainer = styled.span`
  width: 200px;
  font-size: 25px;
  color: #2F4F4F;
  font-weight: bold;
  padding-bottom: 20px;
`

export const AddButtonv2 = styled(CustomButton)`
  opacity: 1;
  top: 255px;
  padding-bottom: 10px;
`;

export const ColorContainerSettings = styled.span`
  flex-direction: row; 
  display: flex;
`

export const ColorContainer = styled.span`
  font-weight: bold;
  padding-bottom: 10px;
`

// export const SizeContainer = styled.span`
//   width: 300px;
//   height: 95%;
//   margin-left: 5px;
//   margin-top: 15px;
// `

// export const HelpContainer = styled.span`
//   width: 300px;
//   height: 95%;
//   margin-left: 5px;
//   margin-top: 15px;
