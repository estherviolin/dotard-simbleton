const customers = [
    {
        name: "Care-media",
        address: {
            street: "8417 Franklin Court Tunnel",
            city: "Mouthcard",
            state: "WI",
            zip: "56839"
        }      
    },
    {
        name: "Stanholding",
        address: {
            street: "2889 Fawn Court Garden",
            city: "Fellsmere",
            state: "NM",
            zip: "09705"
        }      
    },
    {
        name: "Highnix",
        address: {
            street: "5734 Maple Avenue Throughway",
            city: "Little Genesee",
            state: "ME",
            zip: "49376"
        }      
    },
    {
        name: "Conit",
        address: {
            street: "5755 Hillside Drive Crossroad",
            city: "Norval",
            state: "IL",
            zip: "53326"
        }      
    },
    {
        name: "Dong-tom",
        address: {
            street: "4826 Arch Street Lights",
            city: "Newburyport",
            state: "KS",
            zip: "67071"
        }      
    },
    
]

export const useCustomers = () => {
    return customers.slice()
}