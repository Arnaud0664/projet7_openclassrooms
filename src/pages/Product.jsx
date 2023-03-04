import { useParams, Navigate } from "react-router-dom";
import Collapse from '../components/Collapse';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Host from '../components/Host';
import Gallery from '../components/Gallery';
import styles from '../style/modules_css/Product.module.css';
import datas from '../datas/datas.json';

function Product() {
	const urlParams = useParams();
    const product = datas.find(({ id }) => id === urlParams.id);
	if (product === undefined) return <Navigate to="/error" />
    
    const equipments = product.equipments;

    const equipmentsList = equipments.map((element, index) =>
        <li key={index} className= {styles.li}>
            {element}
        </li>
    );

    return(
        <>
            <div>
                <Gallery pictures= {product.pictures}/>
            </div>
            <div className= {styles.infoBlock}>
                <div>
                    <h1 className= {styles.h1Product}>{product.title}</h1>
                    <h2 className= {styles.h2Product}>{product.location}</h2>
                </div>
                <div className= {styles.tagsBlock}>  
                    {product.tags.map((tag) => {
                        return (   
                            <Tags key= {tag} content= {tag}/> 
                        )
                    })}   
                </div>
                <div className= {styles.hostBlock}>
                    <Rating score= {product.rating}/>
                    <Host name= {product.host.name} picture= {product.host.picture}/>   
                </div>
            </div>
            <div className= {styles.collapseBlock_product}>
                    <Collapse productTitle= 'Description' description= {product.description}/>
                    <Collapse productTitle= 'Equipements' description= {equipmentsList}/>
            </div>
        </>
    )
}

export default Product