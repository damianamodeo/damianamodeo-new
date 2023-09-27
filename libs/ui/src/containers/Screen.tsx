import { JSXElementConstructor, ReactNode } from 'react';
import { AnimatePresence, motion as m, useCycle } from 'framer-motion';
import { Suspense, useReducer } from 'react';
// import { useTernaryDarkMode } from 'usehooks-ts';

const variants = {
  initial: (direction: '<') => {
    return {
      zIndex: 1,
      x: direction === '<' ? '-100%' : '100%',
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: '<') => {
    return {
      zIndex: 0,
      x: direction === '<' ? '100%' : '-100%',
    };
  },
};

export type ContentProps = {
  control?: {
    state: State;
    changeSection: (section: string) => void;
    changePage: (section: string, page: string, direction: Direction) => void;
  };
};

type PageChange = {
  type: 'page';
  payload: { page: string; section: string; direction: Direction };
};

type SectionChange = {
  type: 'section';
  payload: { section: string };
};

export type State = {
  section: string;
  page: { [key: string]: string };
  direction: Direction;
};

type Direction = '<' | '>';

export const reducer = (
  state: State,
  { type, payload }: PageChange | SectionChange
): State => {
  if (type === 'page')
    return {
      page: { ...state.page, [payload.section]: payload.page },
      section: payload.section,
      direction: payload.direction,
    };
  if (type === 'section') return { ...state, section: payload.section };
  return { ...state };
};

export type Screen2Props = {
  content: {
    section: string;
    Icon: JSXElementConstructor<any>;
    pages: {
      [key: string]:
        | {
            Page: ({ control }: ContentProps) => ReactNode;
            Header?: ({ control }: ContentProps) => ReactNode;
          }
        | any;
    };
  }[];
};

export const Screen2 = ({ content }: Screen2Props) => {
  // const { isDarkMode } = useTernaryDarkMode();

  const initialState: State = {
    direction: '>',
    section: content[0].section,
    page: content.reduce((obj, item) => {
      obj[item.section] = item.section;
      return obj;
    }, {} as { [key: string]: string }),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const control = {
    state: state,

    changeSection: (section: string) => {
      dispatch({
        type: 'section',
        payload: { section: section },
      });
    },

    changePage: (section: string, page: string, direction: Direction) => {
      dispatch({
        type: 'page',
        payload: { section: section, page: page, direction: direction },
      });
    },
  };

  return (
    <div className={`inset-0 absolute`}>
      {content?.map(({ section, pages }, index) => {
        const Page = pages[state.page[section]].Page;
        const Header = pages[state.page[section]].Header;

        return (
          <div key={index}>
            {section === state.section && (
              <div>
                {Header && (
                  <div
                    className={`fixed w-full bg-grey-200 dark:bg-neutral-800 dark:text-white h-16`}
                  >
                    <Suspense
                      fallback={<div className={`center h-full`}>Loading</div>}
                    >
                      <Header control={control} />
                    </Suspense>
                  </div>
                )}

                <div
                  className={`fixed inset-y-16 w-full dark:bg-black dark:text-white overflow-y-auto hideScollbar`}
                >
                  <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    custom={state.direction}
                  >
                    <m.div
                      className="h-full overflow-hidden"
                      key={state.page[state.section]}
                      custom={state.direction}
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        x: { type: 'tween', duration: 0.3 },
                      }}
                    >
                      <Suspense
                        fallback={
                          <div className={`center h-full`}>Loading</div>
                        }
                      >
                        <Page control={control} />
                      </Suspense>
                    </m.div>
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div
        key={Math.random()}
        className={`bg-grey-200 dark:bg-neutral-800 dark:text-white bottom-0 fixed h-16 w-full flex center`}
      >
        {content.map(({ section, Icon }: any) => {
          return (
            <div
              key={section}
              className={`text-xs center-col w-full h-full ${
                state.section === section
                  ? 'text-primary-500 dark:text-primary-400'
                  : 'text-grey-900 dark:text-grey-100'
              }`}
              onClick={() =>
                state.section === section
                  ? control.changePage(section, section, '<')
                  : control.changeSection(section)
              }
            >
              <Icon {...(state.section !== section && { color: 'default' })} />
              {section}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Screen2;
