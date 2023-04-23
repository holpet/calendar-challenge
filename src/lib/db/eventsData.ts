/**
 * This is a MOCK database, where user input is saved as an Event (just to show functionality).
 * In production, data would be saved in a database.
 * */

export interface IEvents {
  name: string;
  dateEnd: string;
  hourStart: number[];
  hourEnd: number[];
  color: string;
  font: string;
}

const evData = {
  "2023-04-03": [
    {
      name: "No More Dreaming Now",
      dateEnd: "2023-04-03",
      hourStart: [9, 30],
      hourEnd: [15, 0],
      color: "green",
      font: "bg-handwritten",
    },
    {
      name: "It's always sunny in Philadeplphia",
      dateEnd: "2023-04-03",
      hourStart: [17, 15],
      hourEnd: [20, 30],
      color: "white",
      font: "bg-global",
    },
    {
      name: "Surprise suprise, the children are here",
      dateEnd: "2023-04-03",
      hourStart: [22, 0],
      hourEnd: [23, 0],
      color: "pink",
      font: "bg-handwritten",
    },
  ],
  "2023-04-21": [
    {
      name: "Rock For People",
      dateEnd: "2023-04-22",
      hourStart: [9, 0],
      hourEnd: [12, 30],
      color: "orange",
      font: "bg-global",
    },
  ],
};
export const EVENTS = new Map<string, IEvents[]>(Object.entries(evData));
