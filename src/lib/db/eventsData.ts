import { v4 as uuidv4 } from "uuid";

/**
 * This is a MOCK database, where user input is saved as an Event (just to show functionality).
 * In production, data would be saved in a database.
 * */

export interface IEvents {
  id: string;
  name: string;
  dateStart: string;
  dateEnd: string;
  hourStart: number[];
  hourEnd: number[];
  color: string;
  font: string;
}

export const EVENTS = [
  {
    id: uuidv4(),
    name: "No More Dreaming Now",
    dateStart: "2023-04-03",
    dateEnd: "2023-04-03",
    hourStart: [9, 30],
    hourEnd: [15, 0],
    color: "green",
    font: "bg-handwritten",
  },
  {
    id: uuidv4(),
    name: "It's always sunny in Philadeplphia",
    dateStart: "2023-04-03",
    dateEnd: "2023-04-03",
    hourStart: [17, 15],
    hourEnd: [20, 30],
    color: "white",
    font: "bg-global",
  },
  {
    id: uuidv4(),
    name: "Surprise suprise, the children are here",
    dateStart: "2023-04-03",
    dateEnd: "2023-04-03",
    hourStart: [22, 0],
    hourEnd: [23, 0],
    color: "pink",
    font: "bg-handwritten",
  },
  {
    id: uuidv4(),
    name: "Rock For People",
    dateStart: "2023-04-21",
    dateEnd: "2023-04-22",
    hourStart: [9, 0],
    hourEnd: [12, 30],
    color: "orange",
    font: "bg-global",
  },
];
//export const EVENTS = new Map<string, IEvents[]>(evData);

// const map1 = new Map(
//   evData.map(obj => {
//     return [obj.id, obj.name, obj.dateStart, obj.dateEnd, obj.hourStart, obj.hourEnd, obj.color, obj.font] as [IEvents];
//   }),
// );
