import { NYBusinessFilter, useCustomers } from "./BusinessProvider.js"
import { Business } from "./Business.js"



//creates HTML list of all businesses
export const BusinessList = () => {
    const contentTarget = document.querySelector(".customers")
    const businessArray = useCustomers()
    contentTarget.innerHTML = ""
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

// //creates HTML list of manufacturing 
// export const manufactureHTMLList = () => {
//     const arrOfManufacturers = manufactureFilter()
//     const contentTarget = document.querySelector(".businessList--manufacturing")

//     arrOfManufacturers.forEach(businessObject =>
//         contentTarget.innerHTML += Business(businessObject))
// }

// // //add keypress event function
// export const keyPressFunction = () => {
// //     //places search result under foundCompanies id
//     const companySearchResultArticle = document.querySelector(".foundCompanies")

//     document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
//     if (keyPressEvent.charCode===13) {
//         // const foundBusiness = (searchCriteria) => {
//         //      businessArray.find(business => business.companyName === searchCriteria)
//         //  }

//         const foundBusiness = useSearch(keyPressEvent.target.value)

//             companySearchResultArticle.innerHTML = `
//             <h2>
//             ${foundBusiness.companyName}
//             </h2>
//             <section>
//             ${foundBusiness.addressFullStreet}
//             </section>
//             <section>
//             ${foundBusiness.addressCity},
//             ${foundBusiness.addressStateCode}
//             ${foundBusiness.addressZipCode}
//             </section>
//             `
//        
//     }

// })

// }

export const keyPressFunction = () => {
    //places search result under foundCompanies id
    const companySearchResultArticle = document.querySelector(".foundCompanies")
    const businessArray = useCustomers()
    

    document.querySelector("#searchBar").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const searchQuery = document.getElementById("searchBar").value

            const searchObjFunction = (inputString) => {
                const searchObj = businessArray.find(business => {
                    if (business.purchasingAgent.nameFirst.toLowerCase().includes(inputString.toLowerCase()) || business.purchasingAgent.nameLast.toLowerCase().includes(inputString.toLowerCase()) || business.companyName.toLowerCase().includes(inputString.toLowerCase())) {
                        return business
                    }
                })
                return searchObj
            }


            const foundBusiness = searchObjFunction(searchQuery)

            if (foundBusiness !== undefined) {

                companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <h3>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h3>
                <section>
                ${foundBusiness.phoneWork}
                </section>
                <section>
                ${foundBusiness.addressFullStreet}
                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
                `
            }
            else {
                companySearchResultArticle.innerHTML = `<h2>No Results Found</h2>`
            }
        }


    })

}

