import { NextPage } from "next";
import { GoBackButton } from "../components/shared/GoBackButton";
import { UserSchedules } from "../components/UserSchedules";

const MeusAgendamentos: NextPage = () => {
  return (
    <>
      <UserSchedules />;
      <GoBackButton />
    </>
  );
};

export default MeusAgendamentos;
