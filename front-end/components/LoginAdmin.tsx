import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";
import { Button } from "./shared/Button";
import { Input } from "./shared/Input";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  background-color: ${theme.cardColor};
  box-shadow: ${theme.cardShadow};
`;

export const LoginAdmin = () => {
  const [form, setForm] = useState({});

  const saveJwt = () => {
    localStorage.setItem("jwt", crypto.randomUUID());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });

  function login(e: FormEvent) {
    e.preventDefault();
    saveJwt();
  }

  return (
    <Container onSubmit={login}>
      <Input label="E-mail" onInput={handleChange} />
      <Input label="Senha" type={"password"} onInput={handleChange} />
      <Button type="submit">Entrar</Button>
    </Container>
  );
};
