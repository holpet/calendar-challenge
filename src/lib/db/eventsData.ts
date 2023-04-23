/**
 * This is the mock database, where user input is saved as an Event (just to show functionality).
 * In production, data would be saved in a database.
 * */

interface IEvents {
  name: string;
  from: number;
  to: number;
  color: string;
}

export const EVENTS = {};
