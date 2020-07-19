


import {useCustomers} from "./BusinessProvider.js"

const customers= useCustomers()

// function that creates new array of purchasing agent objects from original array
export const Agents = () => {
    
    let newAgentsArray = customers.map(businessObject => {
    return {
    fullName: `${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}`,
    company: `${businessObject.companyName}`,
    phoneNumber: `${businessObject.phoneWork}`
    }  
  //should return new array
  })
  return newAgentsArray

}

export const AgentAsHTML = (agentObj) => {
    return `
        <h2 class = "agent__name">${agentObj.fullName}</h2>
        <div class = "agent__company">${agentObj.company}</div>
        <div class = "agent__number">${agentObj.phoneNumber}</div>
      
      `


}




