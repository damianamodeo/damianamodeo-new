import { doc, runTransaction } from 'firebase/firestore';
import { FirestorePaths, fdb } from '@services';

type Arguments = { path: FirestorePaths; data: { [key: string]: any } };

export const updateDocProperty = async ({ path, data }: Arguments) => {
  const documentRef = doc(fdb, path);
  try {
    const writtenData: any = await runTransaction(fdb, async (transaction) => {
      const document = await transaction.get(documentRef);

      if (!document.exists()) {
        transaction.set(documentRef, data);
        return data;
      }

      transaction.update(documentRef, data);
      return data;
    });
    return writtenData;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default updateDocProperty;
