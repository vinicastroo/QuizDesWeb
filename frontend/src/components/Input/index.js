import React from 'react';

import { InputStyled } from './styles';

function Input({ children, ...rest }) {
  return <InputStyled {...rest}>{children}</InputStyled>;
}

export default Input;
