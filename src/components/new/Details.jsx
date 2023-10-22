import styles from "./Details.module.css"

export default function Details() {
  const optionsFrecuency = ["día", "semana", "mes", "año"]
  const icons = ["💻", "🏃", "📚", "✈️", "💵"]
  return (
    <div className="card">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input placeholder="ej. 52 caminatas" className="input" />
        </label>
        <label className="label">
          ¿Con qué frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input type="number" className="input mr-6" />
            <select className="input">
              {optionsFrecuency.map(option => <option value={option}>{option}</option>)}
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuántas veces deseas completar esta meta?
          <input type="number" className="input" />
        </label>
        <label className="label">
          ¿Tienes una fecha límite?
          <input type="date" className="input" />
        </label>
        <label className="label">
          ¿Cuántas veces has completado ya esta meta?
          <input type="number" className="input" />
        </label>
        <label className="label">
          Escoge el ícono para la meta
          <select className="input">
            {icons.map(icon => <option value={icon}>{icon}</option>)}
          </select>
        </label>
      </form>
      <div className={styles.buttons}>
        <button className="button button--black">Crear</button>
        <button className="button button--gray">Cancelar</button>
      </div>
    </div>
  )
}
