import React, { useState } from 'react'
import Screen from '../Screen'
import { StyledForm, StyledInput } from '../Form'
import { Form } from '@rocketseat/unform'
import CodeBlock from '../CodeBlock'
import { Home, Wrapper, Content, Heading } from './styles'
import * as Yup from 'yup'

export default () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Custom invalid email message')
      .required('Custom required message'),
    password: Yup.string()
      .min(4)
      .required()
  })

  const handleSubmit = data => console.log(data)

  return (
    <>
      <Home />
      <Screen>
        <Wrapper>
          <Content>
            <Heading>Meet UnForm</Heading>
            <StyledForm>
              <Form
                onSubmit={handleSubmit}
                schema={schema}
                customStyle={{ backgroundColor: 'black' }}
              >
                <StyledInput label="Email" name="email" />
                <StyledInput label="Password" name="password" type="password" />
              </Form>
              <button type="submit">Sign in</button>
            </StyledForm>
          </Content>

          <Content>
            <CodeBlock
              showLineNumbers
              title="UnformDemo.jsx"
              customStyle={{ borderRadius: 10 }}
              code={`
import React from "react";
import { Form, Input } from "@rocketseat/unform";

function App() {
  function handleSubmit(data) {
    console.log(data);

    /**
     * {
     *   email: 'email@example.com',
     *   password: "123456"
     * }
     */
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" />
      <Input name="password" type="password" />

      <button type="submit">Sign in</button>
    </Form>
  );
}
            `}
            />
          </Content>
        </Wrapper>
      </Screen>
      <Screen />
      <Screen />
    </>
  )
}
