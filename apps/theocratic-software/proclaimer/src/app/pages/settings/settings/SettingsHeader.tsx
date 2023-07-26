import Header from "@CONTAINERS/Header";

type SettingsHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const SettingsHeader = ({ changeSubpage }: SettingsHeaderType) => {
  return (
    <Header
      left={"null"}
      center={<div className={``}>Settings</div>}
      right={"null"}
    ></Header>
  );
};

export default SettingsHeader;
