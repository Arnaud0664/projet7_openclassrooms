import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";
import aboutArray from "../datas/aboutArray.json"; // j'ai créé un fichier JSON avec les données des collapses
import styles from "../style/modules_css/Collapse.module.css";


function About() {
    return(
        <>
            <AboutBanner />
			<div className= {styles.collapseBlock_about}>
				{aboutArray.map((element, id) => (
					<Collapse
						key={id}
						aboutTitle={element.aboutTitle}
						aboutText={element.aboutText}
					/>
				))}
			</div>
        </>
    )
}

export default About