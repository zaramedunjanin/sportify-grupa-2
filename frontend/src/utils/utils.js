// should hold methods that don't call external API, for example date formating method

const getSportIcon = (sport_name) => {
  switch (sport_name) {
    case "Football":
      return "sports_soccer";

    case "Athletics":
      return "sprint";

    case "Tennis":
      return "sports_tennis";

    case "Volleyball":
      return "sports_volleyball";

    case "Basketball":
      return "sports_basketball";

    case "Ice Skating":
      return "ice_skating";

    case "Swimming":
      return "pool";
  }
};

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export { getSportIcon, getCurrentDateTime };
