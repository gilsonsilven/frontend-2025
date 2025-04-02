

const loadProperties = async () => {
    const response = await fetch('http://localhost:3000/property/list')
    
    const data = await response.json()

    const divList = document.getElementById('property-list')

    divList.innerHTML = ''

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
                <button onclick="removeProperty(${property.id})">excluir</button>
                <button onclick="setToEdit(${property.id}, '${property.type}', ${property.rooms}, '${property.property}' ">editar</button>
            </div>
        </div>
        `
    })
    
}

const removeProperty = async (id) => {
    const response = await fetch(`http://localhost:3000/property/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    if(response.ok) {
        const data = await response.json()

        alert(data.message)

        loadProperties()

        return
    }

    alert("Erro ao excluir imóvel")


}

const createProperty = async (event) => {

    event.preventDefault()

    const property = {
        type: event.target.type.value,
        address: event.target.address.value,
        rooms: +event.target.rooms.value,
        property: event.target.property.value
    }

    const response = await fetch(`http://localhost:3000/property/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(property)
    })
    
    if(response.ok) {
        const data = await response.json()

        alert(data.message)

        window.location = 'index.html'

        return
    }
    
    alert("Erro ao cadastrar imóvel")
}


const prepareToEdit = (id, type, address, rooms, property) => {
    document.getElementById('propertyId').value = id
    document.getElementById('type').value = type
    document.getElementById('address').value = address
    document.getElementById('rooms').value = rooms
    document.getElementById('property').value = property
}