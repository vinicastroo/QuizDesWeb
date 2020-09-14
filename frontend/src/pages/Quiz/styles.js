import styled from 'styled-components';

export const Container = styled.div`
  max-width: 950px;

  width: 100%;
  margin: 40px auto;
  padding: 40px;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
  }

  hr {
    margin: 16px 0;
  }

  button {
    width: 100%;
  }
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 100%;
    margin: 16px 0;
  }
`;

export const Alternative = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin: 0 8px;
  }
`;
