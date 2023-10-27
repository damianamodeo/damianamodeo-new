import {
  deleteDoc,
  deleteDocProperty,
  docPaths,
  docProperties,
  notAtHomes,
  updateDocProperty,
  useFirestoreData,
  writeFirebaseDoc,
  writeNewDoc,
} from '@services';
import { Button, ContentProps } from '@ui';

const path = docPaths['notAtHomes/MaitlandCongregation'];

export function Firebase({ control }: ContentProps) {
  const documentData = useFirestoreData({
    path,
  });

  const handleWriteNotAtHomes = async () => {
    if (import.meta.env.DEV) {
      const data = await writeFirebaseDoc({
        path: path,
        data: ({ existingData, documentExists }) => {
          if (!documentExists) {
            return notAtHomes;
          }
          return existingData;
        },
      });
      console.log(data);
      return;
    }
    console.log('PRODUCTION MODE');
  };

  const handleDelete = async () => {
    if (import.meta.env.DEV) {
      const data = await deleteDoc({ path: path });
      console.log(data);
      return;
    }
    console.log('PRODUCTION MODE');
  };

  const handleUpdate = async () => {
    if (import.meta.env.DEV) {
      const data = await updateDocProperty({
        path: path,
        data: { two: 'three' },
      });
      console.log(data);
      return;
    }
    console.log('PRODUCTION MODE');
  };

  const handleDeleteProperty = async () => {
    if (import.meta.env.DEV) {
      const data = await deleteDocProperty({
        path: path,
        property: docProperties.test,
      });
      console.log(data);
      return;
    }
    console.log('PRODUCTION MODE');
  };

  const handleLogDocument = async () => {
    console.log(documentData);
  };

  return (
    <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>
      <Button onClick={() => console.clear()}>Clear</Button>
      <Button onClick={handleWriteNotAtHomes}>Write Not At Home Data</Button>
      <Button onClick={handleDelete}>Delete Data</Button>
      <Button onClick={handleUpdate}>Update Data</Button>
      <Button onClick={handleDeleteProperty}>Delete Property</Button>
      <Button onClick={handleLogDocument}>Log Document</Button>
    </div>
  );
}

export default Firebase;
