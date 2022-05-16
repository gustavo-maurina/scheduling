import { NextPage } from "next";
import { useRouter } from "next/router";
import { Schedule } from "../components/Schedule";
import { VoltarButton } from "../components/shared/VoltarButton";

const Agendar: NextPage = () => {
  const { back } = useRouter();

  return (
    <>
      <Schedule />
      <VoltarButton />
    </>
  );
};

export default Agendar;
