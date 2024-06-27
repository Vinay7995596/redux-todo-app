import { createSlice } from "@reduxjs/toolkit";
import data from './db'

const Slicereducer = createSlice({
    name : 'vinay',
    initialState : data,
    reducers : {
        addUser : (state, action) => {
            state.push(action.payload)
        },
        updateUser : (state, action) => {
            const {id, name, email} = action.payload
            const findtheData = state.find(user => user.id == id);
            if(findtheData) {
                console.log(findtheData.name)
                findtheData.name = name;
                findtheData.email = email
            }
        },
        deletedUser : (state, action) => {
            const {id} = action.payload
            const deletingUser = state.find(user => user.id == id)
            if(deletedUser) {
                return state.filter(item => item.id !== id)
            }
        }
    }
})
export const {addUser, updateUser, deletedUser} = Slicereducer.actions
export default Slicereducer.reducer