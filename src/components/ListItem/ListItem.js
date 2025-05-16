import styles from "./ListItem.module.css";

function ListItem({ item }) {
  return (
    <div className={styles.ListItem}>
      <div className={styles.itemDec}></div>
      <div className={styles.itemName}>{item.name}</div>
    </div>
  );
}
export default ListItem;
