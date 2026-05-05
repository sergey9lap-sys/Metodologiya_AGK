export const COURSE_START_DATE = "25 мая 2026";
export const COURSE_START_DATE_RAW = "2026-05-25T10:00:00";

export const PRICING = {
  course: {
    name: "МЕТОДОЛОГИЯ",
    includes: [
      "Доступ ко всем модулям курса",
      "Живые встречи с Александрой",
      "Домашние задания и обратная связь",
      "Сертификат по окончании",
      "Доступ в закрытое комьюнити методологов",
    ],
  },
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString("ru-RU") + " ₽";
};
