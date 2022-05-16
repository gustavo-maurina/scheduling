import { api } from "../config/api";

interface CreateProps {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export const createUser = async (
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
