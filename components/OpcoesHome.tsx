import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const Option = styled.button`
  width: 250px;
  height: 30px;
`;

export const OpcoesHome = () => {
  return (
    <Container>
      <OptionsContainer>
        <h1>Olá, escolha uma das opções abaixo</h1>
        <Option>testes</Option>
        <Option>testes</Option>
        <Option>testes</Option>
      </OptionsContainer>
    </Container>
  );
};
