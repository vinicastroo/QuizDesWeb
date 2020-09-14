import React, { useEffect, useState } from 'react';

import { Container, Alternative, Question } from './styles';

import { Scope } from '@rocketseat/unform';

import api from '~/services/api';

import Form from '~/components/Form';
import Input from '~/components/Input';

import * as Yup from 'yup';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    async function loadQuestion() {
      let token = document.cookie.split('token=')[1];

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
      }

      const response = await api.get(`/questions`, {});
      setQuestions(response.data.newQuestions);

      let newArray = [];

      response.data.newQuestions.map((question, index) => {
        let option = JSON.parse(localStorage.getItem(`options${index}`));

        if (option) {
          newArray.push(option);
        } else {
          newArray.push(option);
        }
      });

      setInitialData(newArray);
    }

    loadQuestion();
  }, []);

  const schemaQuestion = Yup.object().shape({
    questions: Yup.array().min(1),
  });

  async function handleSubmitQuiz(data, { resetForm }) {
    console.log(data);

    questions.map((question, index) => {
      localStorage.removeItem(`options${index}`);
    });

    resetForm();
    setInitialData([]);
  }

  function handleClickRadio(e, index) {
    localStorage.setItem(`options${index}`, JSON.stringify(e.target.value));

    let newArray = initialData;

    newArray[index] = e.target.value;
    setInitialData([...newArray]);
  }

  return (
    <Container>
      <Form
        schema={schemaQuestion}
        onSubmit={handleSubmitQuiz}
        initialData={initialData}
      >
        {questions.map((data, index) => {
          return (
            <Scope path={`questions[${index}]`} key={index}>
              <Question key={data.question.id}>
                <h1>{data.question.question}</h1>
                {data.altenatives.map((alternative) => (
                  <Alternative key={alternative.id}>
                    <Input
                      type="radio"
                      name="option"
                      value={alternative.id}
                      onClick={(e) => handleClickRadio(e, index)}
                      checked={initialData[index] == alternative.id}
                    />

                    <p>{alternative.option}</p>
                  </Alternative>
                ))}

                {index + 1 !== questions.length && <hr />}
              </Question>
            </Scope>
          );
        })}
        <button>Confirmar</button>
      </Form>
    </Container>
  );
}

export default Quiz;
