import { useState } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";
import { ScheduleForm } from "./ScheduleForm";
import { UserInfoPrompt } from "./UserInfoPrompt";

const Container = styled.div`
  background-color: ${theme.cardColor};
  box-shadow: ${theme.cardShadow};
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Schedule = () => {
  const [userEmail, setUserEmail] = useState<string>();

  return (
    <Container>
      {userEmail ? (
        <ScheduleForm userEmail={userEmail} />
      ) : (
        <UserInfoPrompt saveUser={(userEmail) => setUserEmail(userEmail)} />
      )}
    </Container>
  );
};
