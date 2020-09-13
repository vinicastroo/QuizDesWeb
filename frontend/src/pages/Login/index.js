import React from 'react';

import { Container, SignIn } from './styles';

import Form from '~/components/Form';
import Input from '~/components/Input';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string('O email é de uso obrigatório').required(
    'O e-mail é obrigatório'
  ),
  password: Yup.string().required('A senha é obrigatória'),
});

function Login() {
  function handleSubmit({ email, password }) {}

  return (
    <Container>
      <SignIn>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" label="email" />
          <Input name="password" type="password" label="Senha" />

          <button type="submit">Acessar</button>
        </Form>
      </SignIn>
    </Container>
  );
}

export default Login;
