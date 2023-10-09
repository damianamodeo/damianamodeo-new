import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { fdb } from '../config';

export function useFirestoreData({
  congregation,
  document,
}: {
  congregation: string;
  document: string | 'maps';
}) {
  const [data, setData] = useState({});
  useEffect(() => {
    const unsub = onSnapshot(doc(fdb, congregation, document), (doc) => {
      if (doc.data()) {
        setData(doc.data()?.mapDetails);
      }
    });
    return () => {
      unsub();
    };
  }, []);
  return data;
}

export default useFirestoreData;
