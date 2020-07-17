import {NYBusinessFilter, useCustomers} from "./BusinessProvider.js"
import {Business} from "./Business.js"


//creates HTML list of all businesses
export const BusinessList = () => {
    const contentTarget = document.querySelector(".customers")
    const businessArray = useCustomers()
    contentTarget.innerHTML="" 
    businessArray.forEach(businessObject => contentTarget.innerHTML += Business(businessObject))
 
}

//creates HTML list of NY businesses using forEach
export const NYBusinessList = () => {

    const NYBusinessArray = NYBusinessFilter()
    const contentTarget = document.querySelector(".businessList--NewYork")

    NYBusinessArray.forEach(businessObject => 
            contentTarget.innerHTML += Business(businessObject))
        
}

// using for loop instead of forEach

// const NYBusinessList = () => {
//     const NYBusinessArray = NYBusinessFilter()
//     const contentTarget = document.querySelector(".businessList--NewYork")

//     for (businessObject of NYBusinessArray) {
//         contentTarget.innerHTML += Business(businessObject)
//     }
// }






