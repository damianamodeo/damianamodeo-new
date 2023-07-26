import { publishersDB } from '@services';
import { Button, Input } from '@ui';
import { useEffect, useReducer } from 'react';

/* eslint-disable-next-line */
export interface DexieDemoProps {
  publisherID?: number;
}

const reducer = (state: any, { type, payload }: any) => {
  if (type === 'init') return { ...payload };
  return { ...state, [type]: payload };
};

export function DexieDemo({ publisherID }: DexieDemoProps) {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
  });
  const onChange = ({ type, payload }: any) => {
    dispatch({ type, payload });
  };

  const handleSubmit = () => {
    if (publisherID) {
      publishersDB.publishers.update(publisherID, state);
      return;
    }
    publishersDB.publishers
      .add({ ...state, userID: crypto.randomUUID() })
      .then((result: any) => console.log(result));
  };

  useEffect(() => {
    const dgg = publishersDB.publishers
      .get(publisherID)
      .then((result: any) => {
        console.log(result); //Log Variable
        if (result) {
          dispatch({ type: 'init', payload: result });
        }
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <Input onChange={onChange} property={'firstName'} value={state.firstName}>
        First Name
      </Input>
      <Input
        onChange={onChange}
        property={'middleName'}
        value={state.middleName}
      >
        Middle Name
      </Input>
      <Input onChange={onChange} property={'lastName'} value={state.lastName}>
        Last Name
      </Input>
      <Input
        onChange={onChange}
        property={'preferredName'}
        value={state.preferredName}
      >
        Preferred Name
      </Input>
      <Button onClick={handleSubmit}>{`${
        publisherID ? 'Update' : 'Submit'
      }`}</Button>
    </div>
  );
}

export default DexieDemo;
