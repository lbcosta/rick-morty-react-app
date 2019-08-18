import styled from 'styled-components';

export const Card = styled.li`
  color: #fff;
  background: #353b48;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  position: relative;

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  section {
    /* top: 0;
    position: absolute; */

    header {
      padding: 5px 0 10px 10px;

      h1 {
        span {
          background: #dcdde1;
          color: #353b48;
          border-radius: 50%;
          padding: 0 6px;
        }
      }

      h3 {
        color: #dcdde1;
        margin-top: 5px;
      }
    }

    /* ul {
      overflow: scroll; 
    } */
  }
`;

export const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;

  background: #97ce4c;
`;
