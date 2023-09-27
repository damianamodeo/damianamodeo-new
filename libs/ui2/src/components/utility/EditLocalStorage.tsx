import { Input } from '@ui2';
import { useReducer } from 'react';

const reducer = (state: any, { type, payload }: any) => {
  if (type === 'init') return { ...payload };
  localStorage.setItem(type, payload);
  return Object.keys(localStorage).map((item) => {
    return { key: item, value: localStorage.getItem(item) };
  });
};

export const EditLocalStorage = () => {
  const initState = Object.keys(localStorage).map((item) => {
    return { key: item, value: localStorage.getItem(item) };
  });
  const [state, dispatch] = useReducer(reducer, initState);

  const onChange = (values: any) => dispatch(values);

  return (
    <div className={``}>
      {state.map((item: any, index: number) => {
        return (
          <Input onChange={onChange} key={item.key} value={item.value}>
            {item.key}
          </Input>
        );
      })}
    </div>
  );
};

export default EditLocalStorage;
