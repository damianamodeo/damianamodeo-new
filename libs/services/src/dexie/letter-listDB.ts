// db.ts
import Dexie, { Table } from "dexie";

export interface Address {
  id?: number;
  date: number;
  mapID: any;
  suburb: string;
  street: number;
  houseNumber: string;
  unitNumber: string;
}

export class LettersList extends Dexie {
  addresses!: Table<Address>;

  constructor() {
    super("Letters List");
    this.version(1).stores({
      addresses: "++id, date, mapID, suburb, street, houseNumber, unitNumber",
    });
  }
}

export const lettersListDB = new LettersList();
