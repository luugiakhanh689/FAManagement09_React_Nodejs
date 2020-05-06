import styled from 'styled-components';

const Content = styled.div`
  width: 400px;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 56px 40px;
  position: relative;
  background-color: white;

  border-style: outset;
  border-width: 5px 5px 5px 10px;

  border-top-left-radius: 55px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 55px;
  border-bottom-right-radius: 15px;

  -webkit-box-shadow: 0px 130px 0px 0px DarkViolet inset; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 0px 130px 0px 0px DarkViolet inset; /* Firefox 3.5 - 3.6 */
  box-shadow: 0px 120px 0px 0px #d8cce4 inset,
    6px 140px 0px 3px DarkViolet inset;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export default Content;
