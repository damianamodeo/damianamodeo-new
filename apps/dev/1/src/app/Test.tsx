
type TestPageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function Test() {

   //console.log('Test', `${variable}`)
    return (
      <div className={`h-full dark:text-white center-h-col gap-2 p-2`}       onClick={()=>console.log("sdfergf")}
      >
            {/* <button onClick={() => dispatch({ type: 'page', payload: 'Home' })}>Go to Home Page</button> */}

      </div>
    )
};

export default Test;