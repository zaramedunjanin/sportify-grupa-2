import {getFields} from "../../../../../services/AdminService/useAdminFetcher";


const databaseColumns = {
        users: {
            title: "User Management",
            headers:
                ["ID", "First Name", "Last Name", "Username", "E-mail", "Phone Number", "City",  "Blocked", "Verified", "Sports", "Role"],
            fields:
                ["id", "first_name", "last_name", "username", "email", "phone_number", "city",  "blocked", "verified", "sports", "role"]
        },
        venues: {
            title: "Venue Management",
            headers:
                ["ID", "First Name", "Last Name", "Role"],
            fields:
                ["id", "first_name", "last_name", "role"]
        },
        sports: {
            title: "Sports Management",
            headers:
                ["ID", "Sport Name"],
            fields:
                ["id", "sport_name"]
        },
        reservations: {
            title: "Reservations Management",
            headers:
                ["ID", "Sport Name"],
            fields:
                ["id", "sport_name"]
        },
    verification: {
        title: "Company Verification",
        headers:
            ["ID", "Sport Name"],
        fields:
            ["id", "sport_name"]
    }
    }
;
export default databaseColumns;