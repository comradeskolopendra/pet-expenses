import { IMonths } from "../store/types";
import { months } from "./constants";

const formatDate = (date: string): string => new Date(date).toLocaleDateString();

const getDateInfo = (date: string): { month: number; day: number; year: number; } => {
  const data = new Date(date);
  return {
    month: data.getMonth(),
    day: data.getDate(),
    year: data.getFullYear()
  }
};

const getMonthByNumber = (month: number): IMonths => months[month];

export {
  formatDate,
  getMonthByNumber,
  getDateInfo
}