// deskStructure.ts
import S from "sanity/desk"

export const myStructure = () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("hotelRoom").title("Hotel Rooms"),
      S.documentTypeListItem("booking").title("Bookings"),
      S.documentTypeListItem("user").title("Users"),
      S.documentTypeListItem("review").title("Reviews"),
      S.documentTypeListItem("payment").title("Payments"),
      S.documentTypeListItem("food").title("Food Items"),
    ]);
