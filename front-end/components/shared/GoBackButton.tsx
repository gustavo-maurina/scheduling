import { useRouter } from "next/router";
import { Button } from "./Button";

export const GoBackButton = () => {
  const { back } = useRouter();

  return (
    <Button onClick={back} color="#ff5b5b">
      Voltar
    </Button>
  );
};
