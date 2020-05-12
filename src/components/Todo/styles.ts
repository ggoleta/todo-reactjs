import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;

  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 10px;
  }

  strong {
    color: #3d3d4d;
  }

  button {
    padding: 5px;
    border: 0;

    svg {
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;
