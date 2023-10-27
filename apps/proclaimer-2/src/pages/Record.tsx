import {
  Combobox,
  ContentProps,
  FirestoreDocumentRefactor,
  AddSuburb,
} from '@ui';
import {
  // useFirestoreData,
  searchForMapboxSuburbDetails,
  charactersBeforeComma,
  charactersAfterFirstComma,
} from '@services';
import { useEffect, useState } from 'react';

export function Record({ control }: ContentProps) {
  return (
    <>
      <FirestoreDocumentRefactor></FirestoreDocumentRefactor>
    </>
  );
}

export default Record;
