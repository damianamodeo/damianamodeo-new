import OpenSource from "apps/theocratic-software/proclaimer/src/old/components/utility/OpenSource";
import Version from "apps/theocratic-software/proclaimer/src/old/components/utility/Version";
import ChangeLog from "./ChangeLog";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <div className="h-full overflow-y-auto">
        <Version></Version>
        <ChangeLog></ChangeLog>
        <OpenSource></OpenSource>
    </div>
  );
};

export default Settings;
