export const changeEmailGQLTAG = `mutation updateUserEmail($pEmail:String,$pId:String,$pType:String){
  updateUserEmail(input:{pEmail:$pEmail,pId:$pId,pType:$pType}){
    procedureResult{
      success
      message
    }
  }
}`
/*
{
  "pEmail": "nivetha@neosme.com",
  "pId": "5af81ba7-000a-4d14-9dfa-b36d065018f8",
  "pType": "CHEF"
}
*/