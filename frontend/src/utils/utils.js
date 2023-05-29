// should hold methods that don't call external API, for example date formating method

const getSportIcon = (sport_name) => {
    switch (sport_name) {
        case "Football":
            return "sports_soccer"

        case "Athletics":
            return "sprint"

        case "Tennis":
            return "sports_tennis"

        case "Volleyball":
            return "sports_volleyball"

        case "Basketball":
            return "sports_basketball"

        case "Ice Skating":
            return "ice_skating"

        case "Swimming":
            return "pool"
    }
}

export default getSportIcon;
