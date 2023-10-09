import {
  deleteDoc,
  deleteDocProperty,
  updateDocProperty,
  useFirestoreData,
  writeNewDoc,
} from '@services';
import { Button, ThemeSelect } from '@ui';

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

  const originalData: any = useFirestoreData({
    congregation: oldCongregation,
    document: oldDocument,
  });

  const logOriginalData = () => {
    console.log(originalData);
  };

  const logNewData = () => {
    console.log(originalData[0].suburbs);
  };

  const writeData = async () => {
    const newData = { data: originalData[0].suburbs };
    const writtenData = await writeNewDoc({
      congregation: newCongregation,
      document: newDocument,
      data: newData,
    });
    console.log(writtenData);
  };

  const deleteData = async () => {
    const writtenData = await deleteDoc({
      congregation: newCongregation,
      document: newDocument,
    });
    console.log(writtenData);
  };

  const updateData = async () => {
    const writtenData = await updateDocProperty({
      congregation: newCongregation,
      document: newDocument,
      data: { data: 'fail' },
    });
    console.log(writtenData);
  };

  const deleteProperty = async () => {
    const writtenData = await deleteDocProperty({
      congregation: newCongregation,
      document: newDocument,
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
