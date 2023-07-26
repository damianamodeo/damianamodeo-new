import { CreateCongregation, FirebaseUser } from '@ui';

type MakeCongregationPageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function MakeCongregation({ changeSubpage }: MakeCongregationPageProps) {
  //console.log('MakeCongregation', `${variable}`)
  return (
    <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>
      <FirebaseUser></FirebaseUser>
      <CreateCongregation></CreateCongregation>
    </div>
  );
}

export default MakeCongregation;
