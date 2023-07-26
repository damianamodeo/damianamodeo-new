import Version from "apps/theocratic-software/proclaimer/src/old/components/utility/Version";
import Card from "apps/theocratic-software/proclaimer/src/old/components/containers/Card";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <div className="bg-neutral-100 dark:bg-black h-full overflow-y-auto text-xl">
      <Version></Version>
      <Card onClick={() => changeSubpage("Appearance", "<")}>
        <Card.Title>Appearance</Card.Title>
      </Card>
      <Card onClick={() => changeSubpage("Details", "<")}>
        <Card.Title>Details</Card.Title>
      </Card>
    </div>
  );
};

export default Settings;
