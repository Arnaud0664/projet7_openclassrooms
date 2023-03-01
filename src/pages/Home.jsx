import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import datas from '../datas/datas.json';
import Card from "../components/Card";
import styles from "../style/modules_css/Home.module.css";

function Home() {
    return (
        <>
            <Banner />
            <div className= {styles.cardSection}>
                {datas.map((product) => {
                    return (
                        <Link key={product.id} to= {`/product/${product.id}`}>
                            <Card cover={product.cover} title={product.title}/>
                        </Link>    
                    )
            })}  
                </div>
                
            
        </>
    )
}



export default Home