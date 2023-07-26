import { Button, GoogleIcon } from '@ui';
import { useAuth } from './AuthContext';

type SignInProps = {
  children?: any;
};

export const SignIn = ({ children }: SignInProps) => {
  const { signIn }: any = useAuth();
  return (
    <Button onClick={signIn}>
      <div className={`${null} flex items-center gap-2`}>
        <GoogleIcon></GoogleIcon>
        Sign in with Google
      </div>
    </Button>
  );
};

export default SignIn;
