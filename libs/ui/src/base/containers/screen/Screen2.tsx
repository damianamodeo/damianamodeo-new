import {
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useTernaryDarkMode } from 'usehooks-ts';

type State = { section: string; page: string };

type PageChange = { type: 'page'; payload: { page: string; section: string } };
type SectionChange = { type: 'section'; payload: { section: string } };

type DispatchAction = PageChange | SectionChange;

type Content = ({
  state,
  dispatch,
}: {
  state: State;
  dispatch: Dispatch<DispatchAction>;
}) => ReactNode;

type Screen2Props = {
  content: {
    section: string;
    Icon: ReactElement;
    pages: {
      name: string;
      Page: Content;
      Header?: Content;
    }[];
  }[];
};

const reducer = (state: State, { type, payload }: DispatchAction) => {
  if (type === 'page')
    return {
      ...state,
      page: payload.page,
      section: payload.section,
    };
  if (type === 'section') return { ...state, section: payload.section };
  return { ...state };
};

export const Screen2 = ({ content }: Screen2Props) => {
  const { isDarkMode } = useTernaryDarkMode();

  const [state, dispatch] = useReducer(reducer, {
    section: content[0].section,
    page: content[0].section,
  });

  // const changeSection = (section: keyof typeof content.section) => {
  //   dispatch({ type: 'section', payload: { section: section } });
  // };

  return (
    <div className={` ${isDarkMode && 'dark'}  inset-0 absolute`}>
      {content?.map(({ section, pages }, index) => {
        return (
          <div key={index}>
            {pages.map(({ name, Header, Page }, index) => {
              if (name !== state.page) return;
              return (
                <div
                  className={`${section !== state.section && 'h-0'} h-full`}
                  key={index}
                >
                  {/*** HEADER ***/}
                  {Header && (
                    <div
                      className={`bg-grey-200 dark:bg-neutral-800 dark:text-white h-16`}
                    >
                      <Header state={state} dispatch={dispatch} />
                    </div>
                  )}

                  {/*** PAGE ***/}
                  <div
                    className={`bg-white dark:bg-black dark:text-white h-full`}
                  >
                    <Page state={state} dispatch={dispatch} />
                  </div>
                </div>
              );
            })}

            {/*** NAVBAR ***/}
          </div>
        );
      })}
      <div
        className={`bg-grey-200 dark:bg-neutral-800 dark:text-white bottom-0 fixed h-16 w-full`}
      >
        Navbar
      </div>
    </div>
  );
};

export default Screen2;
