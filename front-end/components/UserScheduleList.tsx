import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../config/api";
import { ERROR_MSG } from "../constants/genericErrorMsg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #00000026;
  width: 250px;
`;

export const UserScheduleList = ({ email }: { email: string }) => {
  const [schedules, setSchedules] = useState<Schedule[]>();

  useEffect(() => {
    async function getSchedules() {
      try {
        const req = await api.get<Schedule[]>("schedule", {
          params: { email },
        });
        setSchedules(req.data);
      } catch (err) {
        alert(ERROR_MSG);
      }
    }

    getSchedules();
  }, [email]);

  const renderSchedules = () =>
    schedules?.map((schedule, index) => (
      <Row key={index}>{schedule.motive}</Row>
    ));

  return (
    <>
      <Container>
        <h2>Meus agendamentos</h2>
        {!schedules && <p>Nenhum agendamento encontrado</p>}
        {schedules && renderSchedules()}
      </Container>
    </>
  );
};
