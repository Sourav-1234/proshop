import {createSlice} from '@reduxjs/toolkit';



const intialState ={
    userInfo: localStorage.getItem('userInfo') ?JSON.parse(localStorage.
        getItem('userInfo')):null,
}

const authSlice =createSlice({
    name:'auth',
    intialState,
    reducers:{
        setCredentials:(state,action) =>{
            state.userInfo=action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload));

        },
    logout: (state,action) =>{
        state.userInfo= null;
        localStorage.removeItem('userInfo');
    }
    }
});


export const {setCredentials} =authSlice.actions;

export default authSlice.reducer;
