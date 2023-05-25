import {getFields} from "../../../../../services/AdminService/useAdminFetcher";


const databaseColumns = {
        users: {
            title: "User Management",
            headers:
                ["ID", "First Name", "Last Name", "Username", "E-mail", "Phone Number", "City",  "Blocked", "Verified", "Sports", "Role"],
            fields:
                ["id", "first_name", "last_name", "username", "email", "phone_number", "city",  "blocked", "verified", "sport_id", "role"]
        },
        venues: {
            title: "Venue Management",
            headers:
                ["ID", "Name", "Address", "City", "Type", "Description", "Price Per Hour", "Opening Time", "Closing Time", "Company", "Sport"],
            fields:
                ["id", "venue_name", "address", "city", "type", "description", "price_per_hour", "opening_time", "closing_time", "company_id", "sport_id"]
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
                ["ID", "Total Places", "Going", "Start Time", "End Time", "Description", "Approved", "Auto Invite","Number Of Invites", "Sports" , "User", "Venue"],
            fields:
                ["id", "total_places", "going", "start_time", "end_time", "description", "approved", "auto_invite","number_of_invites", "sports_id", "user_id", "venue_id"]
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