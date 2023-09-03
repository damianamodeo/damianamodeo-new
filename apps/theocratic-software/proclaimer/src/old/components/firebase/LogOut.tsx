import Button from "../inputs/Button/Button";
import { useAuth } from "./AuthContext";

const LogOut = () => {
  const { logOut }: any = useAuth();
  return <Button clickAction={logOut}>Log Out</Button>;
};

export default LogOut;
