import styled from "styled-components";
import { theme } from "../themes/theme";
import { AdminScheduleList } from "./AdminScheduleList";
import { Button } from "./shared/Button";
import { GoBackButton } from "./shared/GoBackButton";

const Container = styled.div`
  text-align: center;
  background-color: ${theme.cardColor};
  box-shadow: ${theme.cardShadow};
  padding: 30px;
`;

export const AdminPanel = () => {
  return (
    <>
      <Container>
        <h1>Minha agenda</h1>
        <h3>Semana dia 08/05/2022 até 14/05/2022</h3>

        <AdminScheduleList />

        <div>
          <Button width="100px">Anterior</Button>{" "}
          <Button width="100px">Próxima</Button>
        </div>
      </Container>
      <GoBackButton />
    </>
  );
};
