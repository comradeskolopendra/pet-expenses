const formatDate = (date: string): string => new Date(date).toLocaleDateString();

const getDateInfo = (date: string): { month: number; day: number; year: number; } => {
  const data = new Date(date);
  return {
    month: data.getMonth(),
    day: data.getDate(),
    year: data.getFullYear()
  }
};

const getMonthByNumber = (month: number) => {
  const months = [
    "Январь", "Февраль", "Март",
    "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь",
    "Октябрь", "Ноябрь", "Декабрь"
  ];

  return months[month];
};

export {
  formatDate,
  getMonthByNumber,
  getDateInfo
}