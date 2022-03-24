import { useEffect, useState } from "react";
import ItemList from "./Itemlist";
import {useParams} from "react-router-dom"

const listProducts = [
    {
     id  :1, 
     name: 'Air Jordan 1',
     price: 300,
     stock:20,
     image:'/imags/airjordan.jpg',
     category:1
    },
    {
      id  :2,
    name: 'Lebron 13',
     price: 250,
     stock:20,
     image:'/imags/lebron17.jpg',
     category:1
    },
    {
      id  :3,
     name: 'Kyrie Irving 6',
     price: 150,
     stock:20,
     image:'/imags/kyrie6.jpg',
     category:1
     },
    {
      id  :4,
     name: 'Air Jordan 4',
     price: 300,
     stock:20,
     image:'/imags/airjordan4.jpg',
     category:1
     },
     {
    id  :5,
     name: 'Air Jordan 11',
     price: 280,
     stock:20,
     image:'/imags/airjordan11.jpg',
     category:3
     },
     {
      id  :6,
     name: 'KD 13',
     price: 130,
     stock:20,
     image:'/imags/kd13.jpg',
     category:3
     },
     {
      id  :7,
     name: 'Curry Flow 9',
     price: 200,
     stock:20,
     image:'/imags/curryflow9.jpg',
     category:3
     },
     {
      id :8,
     name: 'Lebron8',
     price: "200",
     stock:20,
     image:"/imags/lebron8.jpg",
     category:2
     },
     {
      id  :9,
     name: 'Kyrie 7',
     price: 115,
     stock:20,
     image:'/imags/kyrie7.jpg',
     category:2
     },
    {
    id  :10,
      name: 'Yeezy',
      price: 250,
      stock:20,
      image:'/imags/yeezyvoost350.jpg',
      category:2
       }
   ];
   function ItemListContainer(){
       const[products,setProducts]=useState([])
       const[loading,setLoading]=useState(false)
       const {id} = useParams()

       useEffect(()=>{
           const promise = new Promise((res,rej)=>{
               setTimeout(() => {
                  res(listProducts) 
               }, 2000);
           });
           promise.then((res)=>{
               setProducts(id?res.filter((product)=> product.category == +id):res);
               setLoading(true)
           }).catch((err)=>{
               console.log(err);
           })

           return setLoading(false)
           
       },[id])
       
       if(!loading){
           return(
            <h4>...Loading</h4>
           )
        }else{
          
            return(
           <div>
               <ItemList products={products}/>
           </div>
           )
       }
   }

export default ItemListContainer;