import Dexie, { Table } from "dexie";

export interface Publisher {
  id?: number;
  userID?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  preferredName?: string;
  familyHead?: string;
  publisherType?: string;
  birthDate?: string;
  baptismDate?: string;
  mobilePhone?: string;
  homePhone?: string;
  personalEmail?: string;
  jwpubEmail?: string;
  unitNumber?: string;
  houseNumber?: string;
  street?: string;
  suburb?: string;
  elder?: boolean;
  servant?: boolean;
  pioneer?: boolean;
}

export class Publishers extends Dexie {
  addresses!: Table<Publisher>;
  publishers: any;

  constructor() {
    super("Publishers");
    this.version(1).stores({
      publishers:
        "++id, userID, firstName, middleName, lastName, displayName, familyHead, birthDate, baptismDate, suburb, elder, servant, pioneer",
    });
  }
}

export const publishersDB = new Publishers();
