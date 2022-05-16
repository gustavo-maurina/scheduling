import { ChangeEvent, FormEvent, useState } from "react";
import { ERROR_MSG } from "../constants/genericErrorMsg";
import { createSchedule, nextScheduleAvailable } from "../services/schedule";
import { getCurrentTime } from "../utils/getCurrentTime";
import { getTodayDate } from "../utils/getTodayDate";
import { isSlotValid } from "../utils/isSlotValid";
import { Button } from "./shared/Button";
import { Datepicker } from "./shared/Datepicker";
import { Input } from "./shared/Input";
import { Timepicker } from "./shared/Timepicker";

export const ScheduleForm = ({ userEmail }: { userEmail: string }) => {
  const [slotUnavailable, setSlotUnavailable] = useState<boolean>(false);
  const [nextAvailableSlot, setNextAvailableSlot] = useState();
  const [form, setForm] = useState({
    motive: "",
    email: userEmail,
    date: getTodayDate(),
    time: getCurrentTime(),
  });

  async function agendarHorario(e: FormEvent) {
    e.preventDefault();
    if (!isSlotValid(form.time, form.date)) return alert("Horário inválido");

    const req = await createSchedule(form);

    if (req.error) {
      if (req.status === 409) {
        setSlotUnavailable(true);
        return getNextSchedule();
      }
      return alert(ERROR_MSG);
    }

    getNextSchedule();
    setSlotUnavailable(false);

    alert("Seu horário foi agendado com sucesso!");
  }

  async function getNextSchedule() {
    const { error, data } = await nextScheduleAvailable(form.date, form.time);
    if (error) return alert(ERROR_MSG);

    setNextAvailableSlot(data.time);

    setForm((current) => ({
      ...current,
      date: data.date,
      time: data.time,
    }));
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });

  return (
    <form onSubmit={agendarHorario}>
      <div>
        <Input label="Motivo" name="motive" onInput={changeHandler} />
      </div>
      <div>
        <p>Data do agendamento</p>
        <Datepicker
          name="date"
          onChange={changeHandler}
          value={form.date}
          required
        />
      </div>

      <div>
        <p>Horário do agendamento</p>
        <Timepicker
          name="time"
          onChange={changeHandler}
          value={form.time}
          required
        />{" "}
        <Button type="button" onClick={getNextSchedule} width="130px">
          Próximo horário
        </Button>
        {slotUnavailable && (
          <p>
            <small style={{ color: "red" }}>
              Horário indisponível, o próximo horário disponível é:{" "}
              <strong>{nextAvailableSlot}</strong>
            </small>
          </p>
        )}
      </div>

      <Button style={{ marginTop: 15 }} type="submit" color="#2a98ff" centered>
        Agendar
      </Button>
    </form>
  );
};
