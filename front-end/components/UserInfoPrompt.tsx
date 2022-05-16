import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { createUser } from "../services/user";
import { Button } from "./shared/Button";
import { Input } from "./shared/Input";

interface Props {
  saveUser: (userId: string) => void;
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const UserInfoPrompt = ({ saveUser }: Props) => {
  const [form, setForm] = useState<any>();

  async function agendarHorario(e: FormEvent) {
    e.preventDefault();

    const req = await createUser(form);

    if (req.error) return window.alert("Operação falhou! Erro interno!");
    saveUser(req.data.id);
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });

  return (
    <Container onSubmit={agendarHorario}>
      <Input label="Nome" name="name" onInput={changeHandler} />
      <Input label="Sobrenome" name="surname" onInput={changeHandler} />
      <Input label="E-mail" name="email" onInput={changeHandler} />
      <Input label="Telefone" name="phone" onInput={changeHandler} />
      <Button type="submit" color="#2a98ff" centered>
        Continuar
      </Button>
    </Container>
  );
};
