import { useParams, Navigate } from "react-router-dom";
//import Collapse from '../components/Collapse';
import Tags from '../components/Tags';

//import Slide from '../components/Slide';
//import styles from '../style/modules_css/Product.module.css';
import datas from '../datas/datas.json';


function Product() {
	const urlParams = useParams();
	const product = datas.find(({ id }) => id === urlParams.id);
	if (product === undefined) return <Navigate to="/error" />
    return(
        <>
            <section key= {urlParams.id} >
            
                    <> 
                        
                        <Tags />{product.tags}
                       
                    </> 
                
          
            </section>
        </>
    )
}

export default Product