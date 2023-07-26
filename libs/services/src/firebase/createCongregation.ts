import { Transaction, doc, runTransaction, setDoc } from 'firebase/firestore';
import { fdb } from './config';

export const createCongregation = async (currentUser: any) => {
  const congName = '';

  const document = doc(fdb, ...[congName]);
  try {
    const lkjsdnf = runTransaction(fdb, (transaction: Transaction): Promise<unknown> => {
      console.log(transaction); //Log Variable
    //   return "sfg"
    });
  } catch {return "sdgf"}
};

export default createCongregation;
