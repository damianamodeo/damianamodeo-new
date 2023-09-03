type Props = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function Junk({ changeSubpage }: any) {
  //console.log('junk', `${variable}`)
  return (
    <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>junk</div>
  );
}

export default Junk;
