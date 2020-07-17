


import {useCustomers} from "./BusinessProvider.js"

const customers= useCustomers()

// function that creates new array of purchasing agent objects
export const Agents = () => {
    
    customers.map(businessObject => ({
   
    fullName: `${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}`,
    company: businessObject.companyName,
    phoneNumber: businessObject.phoneWork
  
  }))

}




