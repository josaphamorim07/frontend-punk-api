import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const AuthLogin = () => {
  const { loginWithRedirect} = useAuth0();

  return (
    <div>
      <Button onClick={() => loginWithRedirect()} variant="contained">Logar</Button>
    
    </div>
  );
};

export default AuthLogin;
