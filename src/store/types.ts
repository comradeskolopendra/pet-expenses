import store from ".";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type IExpenses = {
    price: number;
    name: string;
    date: string;
    id: string;
    month: IMonths;
}
type IMonths = "Январь"
    | "Февраль"
    | "Март"
    | "Апрель"
    | "Май"
    | "Июнь"
    | "Июль"
    | "Август"
    | "Сентябрь"
    | "Октябрь"
    | "Ноябрь"
    | "Декабрь";

export type { RootState, AppDispatch, IMonths, IExpenses };
