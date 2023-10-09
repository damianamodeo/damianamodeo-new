import { ContentProps, FirestoreDocumentRefactor } from '@ui';

export function RefactorFirestore({ control }: ContentProps) {
  return (
    <div className={`center h-full dark:text-white center-h-col gap-2 p-2`}>
      <FirestoreDocumentRefactor></FirestoreDocumentRefactor>
    </div>
  );
}

export default RefactorFirestore;
