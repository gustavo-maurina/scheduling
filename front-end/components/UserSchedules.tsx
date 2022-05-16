import { FormEvent, useState } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";
import { ScheduleList } from "./ScheduleList";
import { Button } from "./shared/Button";
import { Input } from "./shared/Input";

const Container = styled.div`
  background-color: ${theme.cardColor};
  box-shadow: ${theme.cardShadow};
  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const UserSchedules = () => {
  const [form, setForm] = useState({
    submitted: false,
    email: "",
  });

  function saveUserEmail(e: FormEvent) {
    e.preventDefault();
    setForm({ ...form, submitted: true });
  }

  return (
    <Container>
      {!form.submitted ? (
        <Form onSubmit={saveUserEmail}>
          <Input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            label="E-mail"
            required
          />
          <Button type="submit">Ver agenda</Button>
        </Form>
      ) : (
        <ScheduleList />
      )}
    </Container>
  );
};
