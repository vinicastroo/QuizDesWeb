import React from 'react';

import { FormStyled } from './styles';

function Form({ privated = false, children, ...rest }) {
  return (
    <FormStyled privated={privated} {...rest}>
      {children}
    </FormStyled>
  );
}

export default Form;
