export const updateChefPriceCalculatorGQLTAG = `mutation updateChefCalculator($pData: JSON) {
  updateChefPriceCalculator(input: { pData: $pData }) {
    procedureResult {
      success
      message
      json
    }
  }
}
`

/*
{
	"pData":{
		"pChefId":"840e51cd-7aec-46a2-a1bf-3692bd0d5bb8",
		"pNoOfGuestsMin":1,
		"pNoOfGuestsMax":20,
		"pChefPricePerHour":12.5,
		"pChefComplexity":[
			{"complexcityLevel":"1X","dishes":"Test","noOfItems":{"min":1,"max":2}},
			{"complexcityLevel":"1.5X","dishes":"Test","noOfItems":{"min":3,"max":4}},
			{"complexcityLevel":"2X","dishes":"Test","noOfItems":{"min":5,"max":6}}
		],
		"pChefAdditionalServices":[
			{"service":"7313cb8f-e3dc-4cdc-847d-8a10756838e3","price":"3"},
			{"service":"FLOWERS_AND_DECORATION              ","price":"4"},
			{"service":"PLATING                             ","price":"4"},
			{"service":"POURING_SERVICE                     ","price":"5"}
		]
	}
} 
*/