//import Banner from "../../components/Banner";
import datas from '../../datas/datas.json';
import Card from "../../components/Card";
import styles from "../../style/modules_css/Home.module.css"


function Home() {
    return (
        <>
            <section className="bannerSection">
        
            </section>
            <section className= {styles.cardSection}>
                {datas.map((product) => {
                    return (
                        <Card key={product.id} cover={product.cover} title={product.title}/>   
                    )
                })}

            </section>
        </>
    )
}



export default Home