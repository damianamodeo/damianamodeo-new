import { useAuth } from "apps/theocratic-software/proclaimer/src/old/components/firebase/AuthContext";
import SignIn from "apps/theocratic-software/proclaimer/src/old/components/firebase/SignIn";
import LogOut from "apps/theocratic-software/proclaimer/src/old/components/firebase/LogOut";
import UserDetails from "apps/theocratic-software/proclaimer/src/old/components/firebase/UserDetails";

const User = () => {
  const { currentUser }: any = useAuth();

  return (
    <div className={`dark:text-white `}>
      {currentUser ? (
        <>
          <div
            className={`${null} grid place-items-center gap-4 dark:bg-grey-900 dark:border-grey-750 border p-4`}
          >
            <UserDetails></UserDetails>
            <LogOut></LogOut>
          </div>
        </>
      ) : (
        <SignIn></SignIn>
      )}
    </div>
  );
};

export default User;
