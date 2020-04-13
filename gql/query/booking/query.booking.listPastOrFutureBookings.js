export function listPastOrFutureBookingsGQLTAG(params) {
    let filterParams = ``;
    let offsetParams = ``;
    let firstParams = ``;
    //
    let filterStr = ``;

    // Filter

    // Filter by statusID
    if (params.hasOwnProperty('statusId')) {
        if (params.statusId.length !== 0) {
            filterStr = filterStr + `
            chefBookingStatusId: { in: [${params.statusId}] }
            `;
        }
    }

    // Filter by CustomerId
    if (params.hasOwnProperty('customerId')) {
        if (params.customerId != null) {
            filterStr = filterStr + `
            customerId: { eq: "${params.customerId}" }
            `;
        }
    }

    // Filter by Chef Id
    if (params.hasOwnProperty('chefId')) {
        if (params.chefId != null) {
            filterStr = filterStr + `
            chefId: { eq: "${params.chefId}" }
            `;
        }
    }
	
	// Filter by past
    if (params.hasOwnProperty('isPastBookings')) {
        if (params.isPastBookings == true) {
            filterStr = filterStr + `
				chefBookingBlockFromTime:{lte : "${params.chefBookingDate}" }
            `;
        }
    }
	
	// Filter by past
    if (params.hasOwnProperty('isFutureBookings')) {
        if (params.isFutureBookings == true) {
            filterStr = filterStr + `
				chefBookingBlockFromTime:{gte : "${params.chefBookingDate}" }
            `;
        }
    }

    if (filterStr !== '') {
        filterParams = `filter: { 
            ${filterStr} 
        }`
    }

    // First
    if (params.hasOwnProperty('first')) {
        firstParams = `first: ${params.first}`
    } else {
        firstParams = `first: 10`
    }

    // Offset
    if (params.hasOwnProperty('offset')) {
        offsetParams = `offset: ${params.offset}`
    } else {
        offsetParams = `offset: 0`
    }


    let gqlStr = `query listPastOrFutureBookings {
        allChefBookingHistories(
          ${filterParams}
          ${firstParams}
          ${offsetParams}
        ) {
          totalCount
          nodes {
            chefBookingHistId
            chefId
            customerId
            chefBookingFromTime
            chefBookingToTime
            chefBookingBlockFromTime
            chefBookingBlockToTime
            chefBookingStatusId
            chefBookingPriceValue
            chefBookingPriceUnit
            chefBookingServiceChargePriceValue
            chefBookingServiceChargePriceUnit
            chefBookingCommissionPriceValue
            chefBookingCommissionPriceUnit
            chefBookingTotalPriceValue
            chefBookingTotalPriceUnit
            chefBookingCompletedByChefYn
            chefBookingCompletedByCustomerYn
            chefBookingLocationAddress
            chefBookingLocationLat
            chefBookingLocationLng
            chefBookingAddrLine1
            chefBookingAddrLine2
            chefBookingState
            chefBookingCountry
            chefBookingCity
            chefBookingPostalCode
            chefBookingSummary
            dishTypeDesc
            bookingNotes{
              totalCount
              nodes{
                notesHistId
                notesDescription
                tableName
                tablePkId
                chefId
                customerId
                createdAt
              }
            }
            createdAt
            chefProfileByChefId {
              chefId
              fullName
              chefPicId
              defaultStripeUserId
              chefProfileExtendedsByChefId{
                totalCount
                nodes{
                  chefLocationAddress
                  chefCity
                  chefState
                }
              }
            }
            customerProfileByCustomerId {
              customerId
              fullName
              customerPicId
              customerProfileExtendedsByCustomerId{
                totalCount
                nodes{
                  customerLocationAddress
                }
              }
            }
            statusTypeMasterByChefBookingStatusId {
              statusTypeName
            }
            paymentHistoriesByBookingHistId {
              nodes {
                paymentHistId
                bookingHistId
                paymentId
                paymentStripeCustomerId
                paymentCardId
                paymentOrderId
                paymentType
                bookingHistId
                paymentTransactionId
                paymentStatusId
                paymentMethod
                paymentActualAmount
                paymentTotalAmountUnit
                paymentReceiptUrl
                paymentDoneByCustomerId
                paymentDoneForChefId
                paymentDoneForType
              }
            }
          }
        }
      }`;
    return gqlStr;
}

/* 
{
    // For Customer
   "customerId":"<customer_id>"

   // For Chef
   "chefId":"<chef_id>"

   
   "orderBy":""
   "first":""
   "offset":""
   "statusId":["APPROVED"] 
   
   // For past bookings
   "isPastBookings" : true
   "chefBookingDate": "gmt time"
   
   
   // For future bookings
   "isFutureBookings" : true
   "chefBookingDate": "gmt time"
}
*/