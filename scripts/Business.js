//turns business object into HTML content

export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <div class="business__address">
                <p>${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}</p>
                <p>${businessObject.phoneWork}</p>
                <p>${businessObject.orders}</p>
                <p>${businessObject.companyName}</p>
                <p>${businessObject.companyIndustry}</p>
                <p>${businessObject.addressZipCode}</>
                <p>${businessObject.addressStateCode}</p>
                <p>${businessObject.addressFullStreet}</p>
                <p>${businessObject.addressCity}</p>
            </div>
        </section>
    `
}

