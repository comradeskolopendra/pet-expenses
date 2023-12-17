import store from ".";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type IExpenses = {
    price: number;
    name: string;
    date: string;
    id: string;
    month: IMonths;
    currency: ECurrency
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

enum ECurrency {
    Tenge = "₸",
    Ruble = "₽",
    Dollar = "$",
    Euro = "€"
}

export type { RootState, AppDispatch, IMonths, IExpenses };
export { ECurrency };
