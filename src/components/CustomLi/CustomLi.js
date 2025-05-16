import style from "./CustomLi.module.css";

export default function CustomLi({ item }) {
  return (
    <div className={style.customLi}>
      <div className={style.symobol}></div>
      <div className={style.itemName}>{item.name}</div>
    </div>
  );
}
