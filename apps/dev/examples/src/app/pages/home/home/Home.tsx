import { ContentProps } from '@ui';
import {
  Accordion,
  Button,
  Combobox,
  Dialog,
  Input,
  ScrollArea,
  Select,
} from '@ui';
import { useTernaryDarkMode } from 'usehooks-ts';

export function Home({ control }: ContentProps) {
  const pages = [
    'Refactor Firestore',
    'Icons',
    'Inputs',
    'Record',
    'Firebase',
    'Mapbox',
    // 'Local Storage',
    // 'React PDF',
    // 'React Charts',
    // 'Nivo',
    // 'Dexie',
  ];
  const { toggleTernaryDarkMode } = useTernaryDarkMode();

  const testFunction = () => {
    const test = undefined;
    if (test) {
      console.log('🚀 \n~ file: Home.tsx:31 \n~ testFunction \n~ test:', test);
    }
    return;
  };

  return (
    <ScrollArea className={`h-full center-h p-2`}>
      <div className={`${null} grid center-col gap-3 `}>
        <Button onClick={testFunction}>Test Function</Button>
        {pages.map((page, index) => {
          return (
            <Button
              className={`${null} w-80 h-16 text-white text-2xl`}
              key={index}
              onClick={() =>
                control?.changePage({
                  section: 'Home',
                  page: page,
                  direction: '>',
                })
              }
            >
              {page}
            </Button>
          );
        })}
      </div>
    </ScrollArea>
  );
}

export default Home;
