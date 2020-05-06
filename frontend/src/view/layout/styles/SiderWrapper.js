import styled from 'styled-components';

const SiderWrapper = styled.div`
  .ant-layout-sider {
    min-height: 100vh;
    height: 100%;

    border-right-color: rgb(232, 232, 232);
    border-right-width: 1px;
    border-right-style: solid;
    border-radius: 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 3px 5px 6px #ccc;
  }

  .ant-menu-inline {
    border: 0;
  }

  .logo {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    text-align: center;
    background-image: linear-gradient(
      to right,
      rgba(88, 37, 123, 0),
      rgba(88, 37, 123, 1)
    );
  }

  .logo a {
    color: white;
    text-decoration: none;
  }
`;

export default SiderWrapper;
