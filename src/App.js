
import React,{useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import StoreItems from './storeItems';


function App() {
  const [itemsInCart,setItemsIncart]=useState({});
  const addToCart =(id,name)=>{
   if(itemsInCart[id]){
    setItemsIncart({...itemsInCart,[id]:{id:id,name:name,quantity:itemsInCart[id].quantity+1}})
   }
   else{
    setItemsIncart({...itemsInCart,[id]:{id:id,name:name,quantity:1}})
   }   
 
    }
  const addQuantity =(id,name)=>{
   
      setItemsIncart({...itemsInCart,[id]:{id:id,name:name,quantity:itemsInCart[id].quantity+1}})
    
  }
  const minusQuantity = (id,name)=>{
    if(itemsInCart[id].quantity>1){
      setItemsIncart({...itemsInCart,[id]:{id:id,name:name,quantity:itemsInCart[id].quantity-1}})
    }
    
  }
  const removeItem=(id)=>{
    const arrAfterDelete = {...itemsInCart}
    delete arrAfterDelete[id]
    setItemsIncart({...arrAfterDelete})
  }  
  
 return (
   <section className='shoppingCartWrapper'>
     {/* Welcome message............. */}
     <div className = 'shopWelcomeMessage'>
        <h1>Welcome to the shop!</h1>
     </div>

     {/* Shopping list............. */}
     <div className='listAndCart'>
       <div className='shoppingList'>
         <h2 className='shoppingListHead'> ITEMS IN STORE</h2>
         <ul>
         {
           StoreItems.map((item,index)=>{
            return <li key={item.id}>
              <h2>{item.name}</h2>
              <i className="cart plus icon large iconHover" onClick ={()=>addToCart(item.id,item.name)}></i>
            </li>
           })
         }
         </ul>
       
       </div>

     {/* Shopping cart............. */}
      <div className ='shoppingCart'>
          <div className='shoppingCart-head'>
              <h2>Your Cart</h2>
             
          </div>
          <ul className ='shoppingCart-content'>
                {       
                // make list of items inside cart
                  
                     Object.keys(itemsInCart).length?Object.keys(itemsInCart).map((item)=>{
                      const singleItem = itemsInCart[item]
                      return <li key={singleItem.id}>
                      
                      <div className='shoppingCart-content-itemName'>{singleItem.name}</div>
                      {/* add and subtract.-------- */}
                      <div className='shoppingCart-content-addAndSub'>
                      <i className="minus square outline icon " onClick={()=>{minusQuantity(singleItem.id,singleItem.name)}}></i>
                        <span>{singleItem.quantity}</span>
                      <i className="plus square outline icon" onClick={()=>{addQuantity(singleItem.id,singleItem.name)}}></i>
                      </div>
                        {/* delete.-------- */}
                      <div className ='shoppingCart-content-delete'><i className="times circle outline icon" 
                      onClick={()=>{removeItem(singleItem.id)}}></i></div>
                      
                      </li>
                    }):<h2>Add item to your cart.</h2>
                      
                      
                }

          </ul>
       </div>

     </div>



   </section>
   
 )
 }
export default App;
