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

const CancelButton = styled.button`
  color: white;
  background-color: #ff6d6d;
  height: 25px;
  border: none;
  margin: 3px;
  cursor: pointer;
  border-radius: 2px;
`;

export const AdminScheduleList = () => {
  const [schedules, setSchedules] = useState<Schedule[]>();
  // const [pagination, setPagination] = useState<{start:string;end:string}>({
  //   sta
  // })

  useEffect(() => {
    async function getSchedules() {
      try {
        const req = await api.get<Schedule[]>("schedule");

        setSchedules(req.data);
      } catch (err) {
        alert(ERROR_MSG);
      }
    }

    getSchedules();
  }, []);

  const renderSchedules = () =>
    schedules?.map((schedule, index) => (
      <Row key={index}>{schedule.motive}</Row>
    ));

  return (
    <>
      <Container>
        <input
          type="week"
          name=""
          id=""
          onChange={(e) => console.log(e.target.value)}
        />
        <h2>Meus agendamentos</h2>
        {!schedules && <p>Nenhum agendamento encontrado</p>}
        {schedules && renderSchedules()}
      </Container>
    </>
  );
};
