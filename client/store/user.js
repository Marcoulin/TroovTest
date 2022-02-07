export const state = () => ({
    username: "", 
    email: "", 
    password: ""
})

export const mutations = {
    setUsername: (state, data) => {
        state.username = data
    },
    setEmail: (state, data) => {
        state.email = data
    },
    setPassword: (state, data) => {
        state.password = data
    }
}