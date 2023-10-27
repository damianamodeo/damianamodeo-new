import { doc, runTransaction } from 'firebase/firestore';
import { FirestorePaths, FirestoreProperties, fdb } from '@services';

type Arguments = {
  path: FirestorePaths;
  data: { [key in FirestoreProperties]?: any };
};

export const writeNewDoc = async ({ path, data }: Arguments) => {
  const documentRef = doc(fdb, path);
  try {
    const writtenData: any = await runTransaction(fdb, async (transaction) => {
      transaction.set(documentRef, data);
      return data;
    });
    return writtenData;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default writeNewDoc;
