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

export const LoginAdmin = ({
  onLoginSuccess,
}: {
  onLoginSuccess: () => void;
}) => {
  const [form, setForm] = useState<{ password: string; email: string }>({
    password: "",
    email: "",
  });

  const saveJwt = () => localStorage.setItem("jwt", crypto.randomUUID());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });

  function login(e: FormEvent) {
    e.preventDefault();
    console.log(form);

    if (form.password === "1234") {
      saveJwt();
      return onLoginSuccess();
    }
    alert("Senha Errada! obs:a senha é 1234");
  }

  return (
    <Container onSubmit={login}>
      <Input
        name="email"
        label="E-mail"
        type={"email"}
        onInput={handleChange}
        required
      />
      <Input
        label="Senha"
        name="password"
        type={"password"}
        onInput={handleChange}
        required
      />
      <Button type="submit">Entrar</Button>
    </Container>
  );
};
