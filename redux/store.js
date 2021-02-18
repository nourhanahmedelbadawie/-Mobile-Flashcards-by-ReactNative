import React, { createContext, useReducer } from "react";




const initialState = {
  AllDesk:[
    {
      IdDesk:0,
      nameDesk:"desk1",
      qsInDeck:[{
qs:"are you fine 1111",
ans:"yes of couse"
      },
      {
        qs:"are you fine 22222",
        ans:"yes of couse"
              },
              {
                qs:"are you fine 33333",
                ans:"yes of couse"
                      }
    
    ]

    },
    {
      IdDesk:1,
      nameDesk:"desk2",
      qsInDeck:[{
        qs:"are you fine 1111",
        ans:"yes of couse"
              },
              {
                qs:"are you fine 22222",
                ans:"yes of couse"
                      },
                      {
                        qs:"are you fine 33333",
                        ans:"yes of couse"
                              }
    
    ]

    }
 ,    {
  IdDesk:2,
  nameDesk:"desk3",
  qsInDeck:[{
    qs:"are you fine 1111",
    ans:"yes of couse"
          },
          {
            qs:"are you fine 22222",
            ans:"yes of couse"
                  },
                  {
                    qs:"are you fine 33333",
                    ans:"yes of couse"
                          }

]

}
  ]
  };

  const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addDesk":
return  Object.assign({}, state, {
  AllDesk:state.AllDesk.concat({
    IdDesk:(state.AllDesk.length)-1 ,
    nameDesk:action.payload.nameDesk,
    qsInDeck:[]

  }) }
)
    
        case "addQs":
              
            return Object.assign({}, state, {
              AllDesk:state.AllDesk.map(el=>{
                if(el.IdDesk===action.payload.id){
                
              if(el.qsInDeck.length>0){

              
              return Object.assign({}, state, {
                IdDesk:el.IdDesk,
                nameDesk:el.nameDesk,

                qsInDeck:el.qsInDeck.concat({
                  qs:action.payload.qs,
                  ans:action.payload.ans
                })

              })
            }
            else{
                
              return Object.assign({}, state, {
                IdDesk:el.IdDesk,
                nameDesk:el.nameDesk,

                qsInDeck:el.qsInDeck.push({
                  qs:action.payload.qs,
                  ans:action.payload.ans
                })

              })
            }
            }
return el
              })
            });
            case "delete":
              return   Object.assign({}, state, {
                AllDesk:state.AllDesk.filter(el=>el.IdDesk !==action.payload.id)

              }
              )
            
  
        default:
          return state;
      }
  }, initialState)


return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
