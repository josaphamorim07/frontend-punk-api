import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const AuthLogout = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Button onClick={() => logout()} variant="contained">
        Sair
      </Button>
    </>
  );
};

export default AuthLogout;
