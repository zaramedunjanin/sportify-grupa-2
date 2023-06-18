import { useTranslation } from "react-i18next";
import i18next from "i18next";

const useUserDatabase = () => {
  const { t } = useTranslation();
  return {
    userdashboard: {
      title: "My Reservations",
      headers: [
        t("venue"),
        "Sport",
        "Total Places",
        "Going",
        "Description",
        "Start Time",
        "End Time",
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
