export const myaction=(data)=>{
    return{
        type:"ADD",
        data
    }
}
export const increment=(index)=>{
    return{
        type:"INCREMENT",
        index
    }
}
export const decrement=(index)=>{
    return{
        type:"DECREMENT",
        index
    }
}
export const remove = (index) => {
  return {
    type: "REMOVE",
    index
  }
}