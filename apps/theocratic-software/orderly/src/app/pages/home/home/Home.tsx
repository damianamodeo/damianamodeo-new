import { createCongregation } from '@services';
import { Button, FirebaseUser, useAuth } from '@ui2';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const { currentUser }: any = useAuth();

  // const handleClick = () => {
  //   createCongregation();
  // };
  return (
    <div>
      <FirebaseUser></FirebaseUser>
      <Button onClick={() => createCongregation(currentUser)}>
        Create Congregation
      </Button>
    </div>
  );
}

export default Home;
