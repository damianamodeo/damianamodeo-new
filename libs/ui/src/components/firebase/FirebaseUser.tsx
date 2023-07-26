import { SignIn, LogOut, UserDetails, useAuth } from '@ui';

export const FirebaseUser = () => {
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

export default FirebaseUser;
