import {useCustomers} from "./BusinessProvider.js"
import {Business} from "./Business.js"
import {NYBusinesses} from "./BusinessProvider.js"



// export const BusinessList = () => {
//     const contentTarget = document.querySelector(".customers")

//     const businessArray = useCustomers()
//     // contentTarget.innerHTML="" not necessary?


//     businessArray.forEach(
//         (businessObject) => {
//             contentTarget.innerHTML += Business(businessObject)
//         }
//     );
// }

export const NYBusinessList = () => {
    const contentTarget = document.querySelector(".businessList--NewYork")
    const NYarray = NYBusinesses()

    NYarray.forEach(
        (businessObject) => {
            contentTarget.Target.innerHTML += Business(businessObject)
        }
    );
}