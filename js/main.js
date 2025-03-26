const loadProperties = async () => {
    const response = await fetch('http://localhost:3000/property/list')
    
    const data = await response.json()

    const divList = document.getElementById('property-list')

    data.map((property) => {
        divList.innerHTML += `
        <div class="property-card">
            <div class="icon-property">
                <span>i-casa</span>
            </div>
            <div class="texts">
                <h5>${property.type}</h5>
                <p>${property.address}</p>
                <p>${property.property}</p>
            </div>
        </div>
        `
    })
    
}