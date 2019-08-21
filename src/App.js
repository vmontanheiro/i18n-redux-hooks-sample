import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import SelectLanguage from './ui/SelectLanguage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 5rem;
`;

const Body = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  width: 18%;
`;

const Title = styled.span`
  font-size: 1.3em;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;

const App = () => {
  const { t } = useTranslation(`app`);
  return (
    <Container>
      <Body>
        <Title>{t(`title`)}</Title>
        <SelectLanguage fullWidth />
      </Body>
    </Container>
  );
};

export default App;
