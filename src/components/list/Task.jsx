import styles from "./Task.module.css";

function Task({ icon, event, period, details, finished, taskT }) {

  return (
    <div className={styles.task + " card"}>
      <div className="flex items-center">
        <div className={styles.icon}>{icon}</div>
        <p className="text-xl ml-5 mr-10">{event}<sub className="text-xs text-gray-500 ml-1">/ {period}</sub></p>
        <p>{details}</p>
      </div>
      <div className="flex">
        <div className="relative m-2 mx-5">
          <p className="text-center">{finished} de {taskT}</p>
          <div className={styles.bar1}>
            <div style={{ width: `${Math.round((finished / taskT) * 100)}%` }} className={styles.bar2}></div>
          </div>
        </div>
        <button className="button button--gray">Completado</button>
      </div>
    </div>
  )
}

export default Task
