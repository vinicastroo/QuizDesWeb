import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafa;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignIn = styled.div`
  width: 100%;
  max-width: 950px;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 5px;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 8px;
  }

  h1 {
    text-align: center;
    padding: 8px;
  }
`;
