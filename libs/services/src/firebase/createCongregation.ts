import { Transaction, doc, runTransaction, setDoc } from 'firebase/firestore';
import { fdb } from './config';

export const createCongregation = async (currentUser: any) => {
  try {
    await runTransaction(fdb, async (transaction: Transaction) => {
      // const document = await transaction.get(congName);

      // if (!document.exists()) {
      //   throw 'Document does not exist!';
      // }

      // transaction.update(document, { population: "newPopulation" });
      return 'sfg';
    });
  } catch {
    return 'sdgf';
  }
};

export default createCongregation;
