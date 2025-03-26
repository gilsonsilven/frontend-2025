const loadProperties = async () => {
    const response = await fetch('http://localhost:3000/property/list')
    
    const data = await response.json()
}