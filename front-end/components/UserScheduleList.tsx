import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../config/api";
import { ERROR_MSG } from "../constants/genericErrorMsg";
import { getFormattedDate } from "../utils/getFormattedDate";

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
      } catch (err: any) {
        if (err.request.status === 404) return alert("Usuário não existe");
        alert(ERROR_MSG);
      }
    }

    getSchedules();
  }, [email]);

  const renderSchedules = () =>
    schedules?.map((schedule, index) => (
      <Row key={index}>
        {schedule.motive}
        <div>{getFormattedDate(new Date(schedule.date))}</div>
      </Row>
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
