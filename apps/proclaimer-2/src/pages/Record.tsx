import {
  Combobox,
  ContentProps,
  FirestoreDocumentRefactor,
  SearchForSuburb,
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
      <FirestoreDocumentRefactor ></FirestoreDocumentRefactor>
      <SearchForSuburb></SearchForSuburb>
    </>
  );
}

export default Record;
