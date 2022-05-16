import { NextPage } from "next";
import { useRouter } from "next/router";
import { Schedule } from "../components/Schedule";
import { GoBackButton } from "../components/shared/GoBackButton";

const Agendar: NextPage = () => {
  const { back } = useRouter();

  return (
    <>
      <Schedule />
      <GoBackButton />
    </>
  );
};

export default Agendar;
