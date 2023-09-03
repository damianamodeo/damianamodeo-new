import { ChevronDownIcon, HomeIcon, Screen2 } from '@ui';
import Junk from './junk';
import Home from './Home';
import Settings from './Settings';
import Test from './Test';
import Wow from './Wow';

export function App() {
  const content = [
    {
      section: 'Home',
      Icon: <ChevronDownIcon></ChevronDownIcon>,
      pages: [
        {
          name: "Home",
          Page: Test,
          Header: Test,
        },
        {
          name: "Test",
          Page: Test,
          Header: Test,
        },
      ],
    },
    {
      section: 'Settings',
      Icon: <ChevronDownIcon></ChevronDownIcon>,
      pages: [
        {
          name: "Settings",
          Page: Test,
          Header: Test,
        },
        {
          name: "Wow",
          Page: Test,
          Header: Test,
        },
      ],
    },
  ];
  return (
    <div>
      <Screen2 content={content}></Screen2>
    </div>
  );
}

export default App;
