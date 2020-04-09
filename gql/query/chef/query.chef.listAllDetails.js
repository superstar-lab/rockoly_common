/** @format */

export const listAllDetailsGQLTAG = `query listAllDetails($chefId: String!, $dateTime: Datetime!) {
  chefProfileByChefId(chefId: $chefId) {
    fullName
    chefStatusId
    totalEarnings
    totalReviewCount
    outstandingRequests: chefBookingHistoriesByChefId(
      filter: { chefBookingStatusId: { in: ["CUSTOMER_REQUESTED"] } }
    ) {
      nodes {
        chefBookingHistId
        customerId
        customerProfileByCustomerId {
          fullName
          customerId
          customerPicId
        }
        chefBookingFromTime
        chefBookingToTime
        chefBookingBlockFromTime
        chefBookingBlockToTime
        chefBookingLocationAddress
        chefBookingStatusId
      }
    }
    futureReservations: chefBookingHistoriesByChefId(
      filter: {
        chefBookingStatusId: { in: ["CHEF_ACCEPTED"] }
        chefBookingFromTime: { gte: $dateTime }
      }
    ) {
      nodes {
        chefBookingHistId
        customerId
        customerProfileByCustomerId {
          fullName
          customerId
          customerPicId
        }
        chefBookingFromTime
        chefBookingToTime
        chefBookingBlockFromTime
        chefBookingBlockToTime
        chefBookingLocationAddress
        chefBookingStatusId
      }
    }
    reviews: chefBookingHistoriesByChefId(
      filter: {
        chefBookingStatusId: { in: ["COMPLETED"] }
        isChefReviewedYn: { eq: false }
      }
    ) {
      nodes {
        chefBookingHistId
        customerId
        customerProfileByCustomerId {
          fullName
          customerId
          customerPicId
        }
        chefBookingFromTime
        chefBookingToTime
        chefBookingBlockFromTime
        chefBookingBlockToTime
        chefBookingLocationAddress
        chefBookingStatusId
      }
    }
  }
}`;

// Query Variables
/*
{
  "chefId": "07fe580f-416c-4125-b6a3-6a0aa589a1ad",
  "dateTime" : "2020-04-09 00:00:000"
}
*/
