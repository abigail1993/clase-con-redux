let initialState ={count = 0}

const mainReducer=(state=initialState,action)=>{
   // if (action == "incrementar")
    //sumale uno y regresalo al estado
   // else(action=="decrementar")
   // decrementa uno al estado y regresalo

    switch(action.type){
        case("INCREASE COUNT"):        
         let newState = {
          count:state.count + 1
         }
            return newState;
        
        case("DECREASE COUNT"):
          let newStateDecrease = {
            count:state.count - 1
           }
              return newStateDecrease;
        
        default:
          return state;
    }
};


export default mainReducer;
//esto es el segundo archivo que se crea 