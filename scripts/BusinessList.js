



export const BusinessList = () => {
    const contentTarget = document.querySelector(".customers")

    const businessArray = useCustomers()

    //don't need this line?
    // contentTarget.innerHTML = "<h1>Art</h1>"

    customers.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}