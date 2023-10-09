import { doc, runTransaction } from 'firebase/firestore';
import { fdb } from '@services';

type Arguments = { congregation: string; document: string | 'maps'; data: any };

export const writeNewDoc = async ({
  congregation,
  document,
  data,
}: Arguments) => {
  const documentRef = doc(fdb, congregation, document);
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