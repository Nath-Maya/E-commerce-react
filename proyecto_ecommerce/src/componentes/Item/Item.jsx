
const Item = ({id,name,price,categoria,img}) => {
   return (
      <div>
         <div>{name}</div>
         <div>{id}</div>
         <div>{price}</div>
         <div>{categoria}</div>
         <div>{img}</div> 
      </div>
      )
}

export default Item