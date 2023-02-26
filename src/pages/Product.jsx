import { useParams, Navigate } from "react-router-dom";
//import Collapse from '../components/Collapse';
import Tags from '../components/Tags';

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
            <section key= {urlParams.id} className= {styles.tagsBlock}>
            
                    <> 
                    {tags.map((tag) => {
                        return (   
                            <Tags key= {tag} content= {tag}/>
                            
                        )
                    })}   
                    </> 
                
          
            </section>
        </>
    )
}

export default Product