import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentAccount :{
       id:1,
       userName:'ozan_karakuzu' ,
       fullName:'ozan karakuzu',
       avatar:'https://pbs.twimg.com/profile_images/1554939903925944323/oJuKpjtk_normal.jpg'
    },
    accounts:[
        {
            id:1,
            userName:'ozan_karakuzu' ,
            fullName:'ozan karakuzu',
            avatar:'https://pbs.twimg.com/profile_images/1554939903925944323/oJuKpjtk_normal.jpg'
         },
         {
            id:2,
            userName:'ozan2_karakuzu2' ,
            fullName:'ozan2 karakuzu2',
            avatar:'https://pbs.twimg.com/profile_images/1554939903925944323/oJuKpjtk_normal.jpg'
         },
    ]
}

const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        _addAccount: (state, action)=>{
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) =>{
            state.accounts = state.accounts.filter(account => account.id != action.payload)
            if(state.currentAccount && action.payload == state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) =>{
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccount, _removeAccount, _setCurrentAccount} = auth.actions
export default auth.reducer