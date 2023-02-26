import { useParams, Navigate } from "react-router-dom";
//import Collapse from '../components/Collapse';
import Tags from '../components/Tags';
import Rating from '../components/Rating';

//import Slide from '../components/Slide';
import styles from '../style/modules_css/Product.module.css';
import datas from '../datas/datas.json';


function Product() {
	const urlParams = useParams();
	
    const product = datas.find(({ id }) => id === urlParams.id);
	if (product === undefined) return <Navigate to="/error" />
    
    const tags = product.tags;
     
    return(
        <>

            <div>
                <h1 className= {styles.h1Product}>{product.title}</h1>
                <h2 className= {styles.h2Product}>{product.location}</h2>
            </div>
            <div key= {urlParams.id} className= {styles.tagsBlock}>  
                    {tags.map((tag) => {
                        return (   
                            <Tags key= {tag} content= {tag}/> // content = props
                            
                        )
                    })}   
            </div>
            <div className= {styles.host}>
                <Rating score= {product.rating}/> 
                
            </div>
        </>
    )
}

export default Product