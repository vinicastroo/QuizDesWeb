import React from 'react';

import { FormStyled } from './styles';

function Form({ children, ...rest }) {
  return <FormStyled {...rest}>{children}</FormStyled>;
}

export default Form;
