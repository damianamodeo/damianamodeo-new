export const LocalStorageValues = () => {
  return (
    <div className={`${null} `}>
      <span className={`text-xl font-bold`}>Local Storage Values</span>
      {Object.keys(localStorage).map((item) => {
        return (
          <div key={item}>
            {item}:
            <span className={`text-blue-500 pl-2`}>
              {localStorage.getItem(item)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LocalStorageValues;
