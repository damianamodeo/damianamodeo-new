import { Header } from '@ui2';

type SettingsHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const SettingsHeader = ({ changeSubpage }: SettingsHeaderPageHeaderProps) => {
  //console.log('SettingsHeader', `${'variable'}`)
  return (
    <Header
      left={<div></div>}
      center={<div className={`text-center`}>Settings</div>}
      right={<div></div>}
    />
  );
};

export default SettingsHeader;
