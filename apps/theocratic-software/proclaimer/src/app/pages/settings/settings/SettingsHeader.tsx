import Header from "@CONTAINERS/Header";

type SettingsHeaderType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const SettingsHeader = ({ changeSubpage }: SettingsHeaderType) => {
  return (
    <Header
      left={""}
      center={<div className={``}>Settings</div>}
      right={""}
    ></Header>
  );
};

export default SettingsHeader;
