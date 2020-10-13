import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  align-items: center;
  
`;

export const LandingpageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  opacity: 1;
`;

// export const Columnbase = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   width: 100%;
// `;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '580px' : '440px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
  display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 50px;
  overflow: hidden;
`;


export const ContentContainer = styled.div`
  height: 150px;
  // min-height: 150px;
  width: 80%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: black;
  opacity: 0.8;
  position: absolute;
`;

export const ContentTitle = styled.span`
  // font-weight: bold;
  margin-bottom: 6px;
  font-size: 40px;
  color: white;
`;