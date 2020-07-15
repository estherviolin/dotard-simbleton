export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.name}</h2>
            <div class="business__address">
                <p>${businessObject.address.street}</p>
                <p>${businessObject.address.city}</p>
                <p>${businessObject.address.state}</p>
                <p>${businessObject.address.zip}</p>
            </div>
        </section>
    `
}