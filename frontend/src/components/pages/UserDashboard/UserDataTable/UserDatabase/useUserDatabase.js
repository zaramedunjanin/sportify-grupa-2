import { useTranslation } from "react-i18next";
import i18next from "i18next";

const useUserDatabase = () => {
  const { t } = useTranslation();
  return {
    userdashboard: {
      title: t("my_reservations"),
      headers: [
        t("venue"),
        t("sport"),
        t("total_places"),
        t("going"),
        t("description"),
        t("start_time"),
        t("end_time"),
      ],
      fields: [
        "venue",
        "sport",
        "total_places",
        "going",
        "description",
        "start_time",
        "end_time",
      ],
    },
  };
};

export default useUserDatabase;
