import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Wrapper, Content, Header, Button, Title } from './styles'

export default ({ code, title }) => (
  <Wrapper>
    <Header>
      <Button />
      <Button />
      <Button />
      <Title>{title}</Title>
    </Header>
    <Content>
      <SyntaxHighlighter language="javascript|html" style={dracula}>
        {code}
      </SyntaxHighlighter>
    </Content>
  </Wrapper>
)
