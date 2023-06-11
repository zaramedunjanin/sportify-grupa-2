const databaseColumns = {
  users: {
    title: "User Management",
    headers: [
      "ID",
      "Profile Picture",
      "First Name",
      "Last Name",
      "Username",
      "E-mail",
      "Phone Number",
      "City",
      "Blocked",
      "Verified",
      "Sports",
      "Role",
    ],
    fields: [
      "id",
      "profile_picture",
      "first_name",
      "last_name",
      "username",
      "email",
      "phone_number",
      "city",
      "blocked",
      "verified",
      "sport",
      "role",
    ],
  },
  venues: {
    title: "Venue Management",
    headers: [
      "ID",
      "Venue Picture",
      "Name",
      "Address",
      "City",
      "Type",
      "Description",
      "Price Per Hour",
      "Opening Time",
      "Closing Time",
      "Company",
      "Sport",
    ],
    fields: [
      "id",
      "venue_picture",
      "venue_name",
      "address",
      "city",
      "type",
      "description",
      "price_per_hour",
      "opening_time",
      "closing_time",
      "company",
      "sport",
    ],
  },
  sports: {
    title: "Sports Management",
    headers: ["ID", "Sport Name"],
    fields: ["id", "sport_name"],
  },
  reservations: {
    title: "Reservations Management",
    headers: [
      "ID",
      "User",
      "Venue",
      "Sports",
      "Total Places",
      "Going",
      "Start Time",
      "End Time",
      "Description",
      "Approved",
      "Auto Invite",
      "Number Of Invites",
    ],
    fields: [
      "id",
      "user",
      "venue",
      "sport",

      "total_places",
      "going",
      "start_time",
      "end_time",
      "description",
      "approved",
      "auto_invite",
      "number_of_invites",
    ],
  },
  acceptedinvites: {
    title: "Accepted Invites Management",
    headers: ["ID", "Reservation", "User"],
    fields: ["id", "reservation", "user"],
  },
  questions: {
    title: "Question Management",
    headers: ["ID", "Text", "Answer", "Pinned"],
    fields: ["id", "text", "answer", "pinned"],
  },
  ratings: {
    title: "Rating Management",
    headers: ["ID", "Rating", "User", "Venue"],
    fields: ["id", "rating", "user", "venue"],
  },
  verification: {
    title: "Company Verification",
    headers: [
      "ID",
      "First Name",
      "Last Name",
      "Username",
      "E-mail",
      "Phone Number",
      "City",
      "Blocked",
      "Sports",
    ],
    fields: [
      "id",
      "first_name",
      "last_name",
      "username",
      "email",
      "phone_number",
      "city",
      "blocked",
      "sport",
    ],
  },
};

export default databaseColumns;
