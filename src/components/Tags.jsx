import styles from '../style/modules_css/Tags.module.css';

function Tags(props) {
    console.log(props);
    return (
        <div>
            <span className={styles.tags}>{props.content}</span>
        </div>
    )
}

export default Tags