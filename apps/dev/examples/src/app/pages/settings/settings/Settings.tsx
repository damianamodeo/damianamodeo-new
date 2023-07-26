
type SettingsPageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function Settings({changeSubpage }: SettingsPageProps) {

   //console.log('Settings', `${variable}`)
    return (
      <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>
      Settings
      </div>
    )
};

export default Settings;