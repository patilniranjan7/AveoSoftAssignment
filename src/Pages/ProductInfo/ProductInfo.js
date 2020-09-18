import React from 'react'
import {useEffect , useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import css from "./ProductInfo.module.css"
import CardColumns from 'react-bootstrap/CardColumns'
export default function ProductInfo(props) {
    const [products, setProduct] = useState({});
    let Img ="Laptops";
      const Id = props.match.params.id;
      var List = [];
    useEffect(() => {
        axios.get(`https://aveosoft-react-assignment.herokuapp.com/products/${Id}`)
        .then((res) =>{
            setProduct(res.data);
            console.log(res.data)
            
    })  
      }, []);
    function productdata(){
        //console.log(products);
                 if(products.categoryId === 1){
                      Img ="mobile";
                 }
          let url =`https://source.unsplash.com/286x180/?${Img},${products.name}`;
           List.push(<CardColumns>
                                <Card.Img variant="top" src={url} alt="DEMO_IMG" />
                            <Card  >
                                    
                                    <Card.Body className={css.card}>
                                          <Card.Title>&nbsp;{products.name}</Card.Title>
                                          <Card.Title>Model:{products.model}</Card.Title>
                                          <Card.Title>Price:{products.price}</Card.Title>
                                          <Card.Text>
                                              {products.description}  
                                         </Card.Text>
                                    </Card.Body>
                             </Card>
                             </CardColumns>

        );
        
        return List;
    }

    return(<div className={css.body}>
                {productdata()}                   
    </div>);
}