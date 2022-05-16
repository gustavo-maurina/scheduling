import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./shared/Button";
import { Datepicker } from "./shared/Datepicker";
import { Input } from "./shared/Input";
import { Timepicker } from "./shared/Timepicker";

export const ScheduleForm = () => {
  const [form, setForm] = useState({});

  async function agendarHorario(e: FormEvent) {
    e.preventDefault();
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });

  return (
    <form onSubmit={agendarHorario}>
      <div>
        <Input label="Motivo" onInput={changeHandler} />
      </div>
      <div>
        <p>Data do agendamento</p>
        <Datepicker name="date" onChange={changeHandler} required />
      </div>

      <div>
        <p>Horário do agendamento</p>
        <Timepicker name="time" onChange={changeHandler} required />
      </div>

      <Button style={{ marginTop: 15 }} type="submit" color="#2a98ff" centered>
        Agendar
      </Button>
    </form>
  );
};
