import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: true
}

export const darkmode = createSlice({
    name: 'darkmode',
    initialState, 
    reducers: {
        ChangeMode: (state, action) => {
            state.state = !state.state
        }
    }
})

export const {ChangeMode} = darkmode.actions
export default darkmode.reducer