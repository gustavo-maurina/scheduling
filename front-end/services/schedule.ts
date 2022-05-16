import { api } from "../config/api";

interface CreateProps {
  motive: string;
  date: string;
  time: string;
  email: string;
}

export const createSchedule = async (
  form: CreateProps
): Promise<RequestResponse> => {
  let req;
  try {
    req = await api.post("schedule", form);

    return { error: false, data: req.data, status: 201 };
  } catch (err: any) {
    if (err[0]?.validation === "unique")
      return { error: false, data: req?.data, status: 200 };

    return { error: true, data: {}, status: err.request.status };
  }
};

export const nextScheduleAvailable = async (
  date: string,
  time: string
): Promise<RequestResponse> => {
  try {
    const req = await api.get<NextScheduleAvailable>(
      "next-schedule-available",
      { params: { date, time } }
    );

    return { error: false, data: req.data.nextAvailable, status: 201 };
  } catch (err: any) {
    return { error: true, data: {}, status: 500 };
  }
};
