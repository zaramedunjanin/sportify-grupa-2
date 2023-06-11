import { useTranslation } from "react-i18next";
import i18next from "i18next";

const useUserDatabase = () => {
  const { t } = useTranslation();
  return {
    userdashboard: {
      title: "History of the facilities",
      headers: [
        t("id"),
        t("name_2"),
        t("address"),
        t("city"),
        t("date"),
        t("price_per_hour"),
        t("time"),
      ],
      fields: [
        "id",
        "name",
        "address",
        "city",
        "date",
        "price_per_hour",
        "time",
      ],
    },
  };
};

export default useUserDatabase;
