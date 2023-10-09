import { Button, ContentProps } from '@ui';

export function Home({ control }: ContentProps) {
  return (
    <div className={`center-col h-full dark:text-white gap-8 p-2`}>
      <Button
        className="w-48 h-20 text-2xl"
        onClick={() =>
          control?.changePage({
            section: 'Home',
            page: 'Record',
            direction: '>',
          })
        }
      >
        Record
      </Button>
      <Button
        className="w-48 h-20 text-2xl"
        onClick={() =>
          control?.changePage({
            section: 'Home',
            page: 'Return',
            direction: '>',
          })
        }
      >
        Return
      </Button>
      <Button
        className="w-48 h-20 text-2xl"
        onClick={() =>
          control?.changePage({
            section: 'Home',
            page: 'Write',
            direction: '>',
          })
        }
      >
        Write
      </Button>
    </div>
  );
}

export default Home;
