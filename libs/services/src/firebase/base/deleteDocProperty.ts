import { doc, runTransaction } from 'firebase/firestore';
import { FirestorePaths, FirestoreProperties, fdb } from '@services';

type Arguments = { path: FirestorePaths; property: FirestoreProperties };

export const deleteDocProperty = async ({ path, property }: Arguments) => {
  const documentRef = doc(fdb, path);
  try {
    const updatedData: any = await runTransaction(fdb, async (transaction) => {
      const newData = await transaction.get(documentRef).then((data) => {
        return data.data();
      });

      if (newData) {
        delete newData[property];
      }

      transaction.set(documentRef, newData);

      return newData;
    });

    return updatedData;
  } catch (e: any) {
    console.error(e.message);

    return e;
  }
};

export default deleteDocProperty;
