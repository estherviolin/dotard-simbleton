import {Agents, AgentAsHTML} from "./agents.js"

export const AgentList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".agents")

    // array of agents from agents.js
    const arrOfAgents = Agents()

    let agentHTMLReps = ""

    //loop through array of Agents and add each to HTML
    for(const agentObj of arrOfAgents) {
        agentHTMLReps += AgentAsHTML(agentObj)
    }
    contentElement.innerHTML += `
        <section class="agent">${agentHTMLReps}</section>
    `
}