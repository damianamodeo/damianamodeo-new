import Button from "../inputs/Button/Button";
import { useAuth } from "./AuthContext";
import { GoogleIcon } from "apps/theocratic-software/proclaimer/src/old/components/icons/IconIndex";

type SignInProps = {
  children?: any;
};

const SignIn = ({ children }: SignInProps) => {
  const { signIn }: any = useAuth();
  return (
    <Button clickAction={signIn}>
      <div className={`${null} flex items-center gap-2`}>
        <GoogleIcon></GoogleIcon>
        Sign in with Google
      </div>
    </Button>
  );
};

export default SignIn;
