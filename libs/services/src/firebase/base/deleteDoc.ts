import { doc, runTransaction } from 'firebase/firestore';
import { fdb } from '@services';

type Arguments = { congregation: string; document: string | 'maps' };

export const deleteDoc = async ({ congregation, document }: Arguments) => {
  const documentRef = doc(fdb, congregation, document);
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
