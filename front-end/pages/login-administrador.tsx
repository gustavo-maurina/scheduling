import { NextPage } from "next";
import { useEffect, useState } from "react";
import { LoginAdmin } from "../components/LoginAdmin";
import { GoBackButton } from "../components/shared/GoBackButton";

const LoginAdministrador: NextPage = () => {
  const [hasLogin, setHasLogin] = useState<boolean>(false);

  useEffect(() => {
    setHasLogin(!!localStorage.getItem("jwt"));
  }, []);

  if (!hasLogin) return <LoginAdmin onLoginSuccess={() => setHasLogin(true)} />;

  return <GoBackButton />;
};

export default LoginAdministrador;
