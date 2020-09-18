import React from 'react'
import {useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import css from './ProductDescription.module.css'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
export default function ProductDescription(props){
    const[hide , sethide] = useState(true);
    const[Id , setId] = useState(0);
    const[products, setproductsdata] = useState({});
     const[model , setmodel] = useState({})
   
    var List = [];
     useEffect(() => {
           axios.get('https://aveosoft-react-assignment.herokuapp.com/products')
                    .then((res) =>{
                           setproductsdata(res.data);
                          
                  })
           
        }, [Id]);

      function product(){
              
              for(let i in products){
                 
                  
                    if(parseInt(products[i].categoryId) == parseInt(props.id))
                    {
                          console.log(products[i]);
                          let des = [];
                          let c =0;
                          for(let b of products[i].description){
                                des.push(b);
                              if(c === 2) break;
                              else if(b === "."){ c++;}
                        }
                          let url=`https://source.unsplash.com/286x180/?${props.name},${products[i].name}`;
                          List.push(<div>
                                     <Link to={`/${products[i].id}`} style={{ textDecoration: 'none' }}>
                                    <Card key={i} className={css.card}>

                                    <Card.Img  className={css.img} variant="top" src={url} />
                                    <Card.Body className={css.cardBody}>
                                          <Card.Title>&nbsp;{products[i].name}</Card.Title>
                                          <Card.Title>Model:&nbsp;{products[i].model}</Card.Title>
                                          <Card.Title>Price:&nbsp;{products[i].price}</Card.Title>
                                          <Card.Text>
                                                {des}
                                         </Card.Text>
                                    </Card.Body>
  
                                    </Card>
                                    </Link>
                                    </div>
                          );
                     }
              }
              return List;
        }

        
        
       return(<div style={{padding:'0% 10%'}}>
         {
            {hide}?(<div >
             
                  <CardColumns> {product()} </CardColumns>
                    
                  </div>
                 ):


                 (<div className={css.productInfo}>
                       <h1>h2h2</h1>
                   </div>
                 )
         }
                     
        </div>);

}


