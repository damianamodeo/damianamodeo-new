import Card from "apps/theocratic-software/proclaimer/src/old/components/containers/Card";
import Button from "apps/theocratic-software/proclaimer/src/old/components/inputs/Button";

const cardStyle = `rounded-xl bg-white dark:bg-neutral-700 text-blue-400 text-center p-6 text-3xl w-full`;

type HomeType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Home = ({ changeSubpage }: HomeType) => {
  return (
    <div className="bg-neutral-100 dark:bg-black h-full p-2">
      <Card onClick={() => changeSubpage("Record", "<")}>
        <Card.Title>Record</Card.Title>
      </Card>
      <Card onClick={() => changeSubpage("Return", "<")}>
        <Card.Title>Return</Card.Title>
      </Card>
      <Card onClick={() => changeSubpage("Write", "<")}>
        <Card.Title>Write</Card.Title>
      </Card>
    </div>
  );
};

export default Home;
