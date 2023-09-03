
type WowPageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function Wow({changeSubpage }: any) {

   //console.log('Wow', `${variable}`)
    return (
      <div className={`h-full dark:text-white center-h-col gap-2 p-2`}       onClick={()=>console.log("sdfergf")}
      >
      Wow
      </div>
    )
};

export default Wow;