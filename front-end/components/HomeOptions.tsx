import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "./shared/Button";

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const HomeOptions = () => {
  const { push } = useRouter();
  const navigate = (pageName: string) => push(pageName);

  return (
    <OptionsContainer>
      <h1>Olá, escolha uma das opções abaixo</h1>
      <Button onClick={() => navigate("agendar")}>Agendar</Button>
      <Button onClick={() => navigate("meus-agendamentos")}>
        Meus agendamentos
      </Button>
      <Button onClick={() => navigate("login-administrador")}>
        Entrar como administrador
      </Button>
    </OptionsContainer>
  );
};
