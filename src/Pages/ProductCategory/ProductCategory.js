import React from 'react'
import {useState, useEffect} from 'react'
import css from "./ProductCategory.module.css"
import { Dropdown,FormControl } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductDescription from "../../Component/ProductDescription/ProductDescription"
// Purl  https://aveosoft-react-assignment.herokuapp.com/products
//Curl   https://aveosoft-react-assignment.herokuapp.com/categories

export default function ProductCategory(){

  const [value, setValue] = useState('');
  const [categoriesdata, setcategoriesdata] = useState({});
  const [productsdata, setproductsdata] = useState({});
  const[name, setname] = useState("laptop");
  const [id, setId] = useState(0)
  var List = [];

  useEffect(() => {
    
    axios.get('https://aveosoft-react-assignment.herokuapp.com/categories')
    .then((res) =>{
          setcategoriesdata(res.data);
    })

    
  }, []);

 const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      console.log(e)
      onClick(e);
    }}
   > 
    {name}
    &#x25bc;
   </a>
  
  ));


 // forwardRef again here!
 // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );


 function productList(){
   if(setcategoriesdata){
   for(let i in categoriesdata){
      //console.log(categoriesdata[i])
      //<Dropdown.Item onSelect={(e) => { alert(e)}} eventKey="0" active>Laptop</Dropdown.Item>
       let Id = categoriesdata[i].id;
       let Name = categoriesdata[i].name;
       List.push(
        <Dropdown.Item onSelect={(e) => {  setId(Id);setname(Name);}} eventKey={Id}><Link to={`/`}>{Name}</Link></Dropdown.Item>

       );
     }
    }
 
   return List;

  }


 return(<div >
   <div className={css.body}>
   <Dropdown className={ css.dropdown} >
     <h6 className={css.flex}>Product Name:-</h6>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" drop='right'>
      Product List 
    </Dropdown.Toggle>
    <Dropdown.Menu  as={CustomMenu} >
      {productList()}      
    </Dropdown.Menu>   
   </Dropdown>
   </div>
        <ProductDescription id={id} name={name}/>
   </div>

);
}


