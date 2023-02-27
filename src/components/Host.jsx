import styles from '../style/modules_css/Host.module.css';



function Host(props) {
    const name = props.name;
    const picture = props.picture;
    return (
        <div className= {styles.host}>
            <div className= {styles.host_name}>{name}</div>
            <div className= {styles.pictureContainer}>
                <img src= {picture} alt="visage" className= {styles.picture}/>
            </div> 
        </div>
    )
}

export default Host