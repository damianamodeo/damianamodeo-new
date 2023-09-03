type HomePageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function Home({ state, dispatch }: any) {
  //console.log('Home', `${variable}`)
  return (
    <div
      className={`h-full dark:text-white center-h-col gap-2 p-2`}
      
    >
      
      <button onClick={() => dispatch({ type: 'page', payload: {page: "Wow", section: "Settings"} })}>Go to Test Page</button>
    </div>
  );
}

export default Home;
