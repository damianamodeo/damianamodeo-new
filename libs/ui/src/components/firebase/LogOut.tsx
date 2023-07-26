import { Button, useAuth } from '@ui';

export const LogOut = () => {
  const { logOut }: any = useAuth();
  return <Button onClick={logOut}>Log Out</Button>;
};

export default LogOut;
