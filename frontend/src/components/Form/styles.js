import styled, { css } from 'styled-components';

import { Form as FormUnform } from '@rocketseat/unform';
import { color_primary, color_secundary } from '~/styles/variables';
import { darken } from 'polished';

export const FormStyled = styled(FormUnform)`
  display: flex;
  flex-direction: column;
  padding: 32px;

  ${(props) =>
    props.stage === 1 &&
    css`
      #content_1 {
        display: flex;
      }
      #content_2 {
        display: none;
      }
    `}
  ${(props) =>
    props.stage === 2 &&
    css`
      #content_1 {
        display: none;
      }
      #content_2 {
        display: flex;
      }
    `}
    .btn_back {
    background: transparent;
    border: 0;
    margin: 16px 0;
    cursor: pointer;
  }

  .btn_back:hover {
    color: ${color_primary};
  }
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;

    background: #fff;
  }
  span {
    margin-top: 8px;
    color: #d92027;
    font-size: 11px;
  }

  label {
    margin-top: 24px;
    margin-bottom: 8px;
    text-transform: capitalize;
    font-weight: bold;
    color: ${color_secundary};
  }

  .btn_continue,
  button[type='submit'] {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
    padding: 24px 0;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    background: ${color_secundary};
    cursor: pointer;
    color: #fff;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, color_primary)};
    }
  }
`;
