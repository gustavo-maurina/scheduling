import styled from "styled-components";

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

export const ScheduleList = () => {
  return (
    <Container>
      <h2>Meus agendamentos</h2>
      <Row>
        a<CancelButton>Cancelar</CancelButton>
      </Row>
      <Row>
        a<CancelButton>Cancelar</CancelButton>
      </Row>
      <Row>
        a<CancelButton>Cancelar</CancelButton>
      </Row>
      <Row>
        a<CancelButton>Cancelar</CancelButton>
      </Row>
    </Container>
  );
};
