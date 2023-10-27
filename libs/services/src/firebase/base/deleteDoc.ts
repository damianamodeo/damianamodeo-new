import { doc, runTransaction } from 'firebase/firestore';
import { FirestorePaths, fdb } from '@services';

export const deleteDoc = async ({ path }: { path: FirestorePaths }) => {
  const documentRef = doc(fdb, path);
  try {
    const writtenData: any = await runTransaction(fdb, async (transaction) => {
      transaction.delete(documentRef);
    });
    return writtenData;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

export default deleteDoc;
