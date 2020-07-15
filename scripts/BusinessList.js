import {useCustomers} from "./BusinessProvider.js"
import {Business} from "./Business.js"




export const BusinessList = () => {
    const contentTarget = document.querySelector(".customers")

    const businessArray = useCustomers()
    // contentTarget.innerHTML="" not necessary?


    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}