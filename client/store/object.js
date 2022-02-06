export const state = () => ({
    status :"",
    location :"",
    date :"",
    category :""
})

export const mutations = {
    setStatus: (objState, data) => {
        objState.status = data
    },

    setLocation: (objState, data) => {
        objState.location = data
    },

    setDate: (objState, data) => {
        objState.date = data
    }, 

    setCategory: (objState, data) => {
        objState.category = data
    }
}