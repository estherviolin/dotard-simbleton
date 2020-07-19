import {NYBusinessFilter, useCustomers, manufactureFilter, useSearch} from "./BusinessProvider.js"
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

//creates HTML list of manufacturing 
export const manufactureHTMLList = () => {
    const arrOfManufacturers = manufactureFilter()
    const contentTarget = document.querySelector(".businessList--manufacturing")

    arrOfManufacturers.forEach(businessObject =>
        contentTarget.innerHTML += Business(businessObject))
}

// //add keypress event function
export const keyPressFunction = () => {
//     //places search result under foundCompanies id
    const companySearchResultArticle = document.querySelector(".foundCompanies")

    document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode===13) {
        // const foundBusiness = (searchCriteria) => {
        //      businessArray.find(business => business.companyName === searchCriteria)
        //  }
        
        const foundBusiness = useSearch(keyPressEvent.target.value)

            companySearchResultArticle.innerHTML = `
            <h2>
            ${foundBusiness.companyName}
            </h2>
            <section>
            ${foundBusiness.addressFullStreet}
            </section>
            <section>
            ${foundBusiness.addressCity},
            ${foundBusiness.addressStateCode}
            ${foundBusiness.addressZipCode}
            </section>
            `
        //undefined for some reason   
    }
    
})

}

