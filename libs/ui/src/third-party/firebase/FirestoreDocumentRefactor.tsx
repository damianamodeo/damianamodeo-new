import {
  deleteDoc,
  deleteDocProperty,
  docPaths,
  updateDocProperty,
  useFirestoreData,
  writeNewDoc,
} from '@services';
import { Button, ThemeSelect } from '@ui';

const path = docPaths.test

export const FirestoreDocumentRefactor = () => {
  const oldCongregationOptions = [
    'maitland_nsw_australia',
    'australia_nsw_maitland',
  ];
  const oldDocumentOptions = ['maps', 'mapDetails'];

  const oldCongregation = oldCongregationOptions[1];
  const oldDocument = oldDocumentOptions[0];

  const newCongregation = 'test';
  const newDocument = 'territoryData';

  const originalData: any = useFirestoreData({ path: path });

  const logOriginalData = () => {
    console.log(originalData);
  };

  const logNewData = () => {
    console.log(originalData[0].suburbs);
  };

  const writeData = async () => {
    const newData = { data: originalData[0].suburbs };
    const writtenData = await writeNewDoc({
      path: path,
      data: newData,
    });
    console.log(writtenData);
  };

  const deleteData = async () => {
    const writtenData = await deleteDoc({
      path: path,
    });
    console.log(writtenData);
  };

  const updateData = async () => {
    const writtenData = await updateDocProperty({
      path: path,
      data: { data: 'fail' },
    });
    console.log(writtenData);
  };

  const deleteProperty = async () => {
    const writtenData = await deleteDocProperty({
      path: path,
      property: 'test',
    });
    console.log(writtenData);
  };

  return (
    <div className={`text-black center-col gap-2`}>
      <Button onClick={() => console.clear()}>Clear</Button>
      <Button onClick={logOriginalData}>Log Original Data</Button>
      <Button onClick={logNewData}>Log New Data</Button>
      <Button onClick={writeData}>Write New Data</Button>
      <Button onClick={deleteData}>Delete Old Data</Button>
      <Button onClick={updateData}>Update Data</Button>
      <Button onClick={deleteProperty}>Delete Property</Button>
    </div>
  );
};

export default FirestoreDocumentRefactor;
