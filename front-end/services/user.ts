import { api } from "../config/api";
import { getRequestError } from "../utils/getRequestError";

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
    req = await api.post("user", form);

    return { error: false, data: req.data };
  } catch (err: any) {
    const error = getRequestError(err);

    if (error && error[0].validation === "unique")
      return { error: false, data: error[0] };

    return { error: true, data: {} };
  }
};
