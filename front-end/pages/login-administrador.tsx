import { NextPage } from "next";
import { useEffect, useState } from "react";
import { AdminPanel } from "../components/AdminPanel";
import { LoginAdmin } from "../components/LoginAdmin";

const LoginAdministrador: NextPage = () => {
  const [hasLogin, setHasLogin] = useState<boolean>(false);

  useEffect(() => {
    setHasLogin(!!localStorage.getItem("jwt"));
  }, []);

  if (!hasLogin) return <LoginAdmin />;

  return <AdminPanel />;
};

export default LoginAdministrador;
