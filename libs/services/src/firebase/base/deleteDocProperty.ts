import { doc, runTransaction } from 'firebase/firestore';
import { fdb } from '@services';

type Arguments = {
  congregation: string;
  document: string | 'maps';
  property: any;
};

export const deleteDocProperty = async ({
  congregation,
  document,
  property,
}: Arguments) => {
  const documentRef = doc(fdb, congregation, document);
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
