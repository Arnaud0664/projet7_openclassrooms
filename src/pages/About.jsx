import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";
import aboutArray from "../datas/aboutArray.json"; // j'ai créé un fichier JSON avec les données des collapses
import styles from "../style/modules_css/Collapse.module.css";


function About() {
    return(
        <>
            <AboutBanner />
			<div className= {styles.aboutContainer}>
				{aboutArray.map((rule, id) => (
					<Collapse
						key={id}
						aboutTitle={rule.aboutTitle}
						aboutText={rule.aboutText}
					/>
				))}
			</div>
        </>
    )
}

export default About