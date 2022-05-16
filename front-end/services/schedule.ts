import { api } from "../config/api";

interface CreateProps {
  motive: string;
  date: string;
  time: string;
  userId: number;
}

export const createSchedule = async (
  form: CreateProps
): Promise<RequestResponse> => {
  let req;

  try {
    req = await api.post("create-user", form);

    return { error: false, data: req.data };
  } catch (err: any) {
    if (err[0]?.validation === "unique")
      return { error: false, data: req?.data };

    return { error: true, data: {} };
  }
};
