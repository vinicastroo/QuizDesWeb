import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, SignIn } from './styles';

import Form from '~/components/Form';
import Input from '~/components/Input';

import * as Yup from 'yup';

import api from '~/services/api';
import { toast } from 'react-toastify';

const schema = Yup.object().shape({
  email: Yup.string('O email é de uso obrigatório').required(
    'O e-mail é obrigatório'
  ),
  password: Yup.string().required('A senha é obrigatória'),
});

function Login() {
  let history = useHistory();

  useEffect(() => {
    let token = document.cookie.split('token=')[1];

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      history.push('/quiz');
    }
  }, [history]);

  async function handleSubmit({ email, password }) {
    try {
      const response = await api.post(`/sessions`, {
        email,
        password,
      });
      var date = new Date();
      date.setDate(date.getDate() + 1);

      document.cookie = `token=${response.data.token}; expires=${new Date(
        date
      ).toGMTString()}`;

      if (response.data.token) {
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        history.push('/quiz');
      }

      toast.success('Login feito com sucesso');
    } catch {
      toast.error('Aconteceu algum erro');
    }
  }

  return (
    <Container>
      <SignIn>
        <Form schema={schema} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Input name="email" type="email" label="email" />
          <Input name="password" type="password" label="Senha" />

          <button type="submit">Acessar</button>
        </Form>
      </SignIn>
    </Container>
  );
}

export default Login;
