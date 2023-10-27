import { useState } from "react"
import styles from "./Details.module.css"

export default function Details() {

  const [form, setForm] = useState({
    details: "",
    events: 1,
    time: "semana",
    iconP: "🏃",
    task: 52,
    term: "2030-01-01",
    finished: 0
  })

  const { details, events, time, iconP, task, term, finished } = form
  const onChange = (event, prop) => {
    setForm(estado => ({ ...estado, [prop]: event.target.value }))
  }

  const create = async () => {
    for (let i in form) {
      console.log(i + " = " + form[i])
    }
  }

  const options = ["día", "semana", "mes", "año"]
  const icons = ["💻", "🏃", "📚", "✈️", "💵"]
  return (
    <div className="card">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input placeholder="ej. 52 caminatas" className="input" value={details} onChange={e => onChange(e, "details")} />
        </label>
        <label className="label">
          ¿Con qué frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input type="number" className="input mr-6" value={events} onChange={e => onChange(e, "events")} />
            <select className="input" value={time} onChange={e => onChange(e, "time")} >
              {options.map(option => <option value={option}>{option}</option>)}
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuántas veces deseas completar esta meta?
          <input type="number" className="input" value={task} onChange={e => onChange(e, "task")} />
        </label>
        <label className="label">
          ¿Tienes una fecha límite?
          <input type="date" className="input" value={term} onChange={e => onChange(e, "term")} />
        </label>
        <label className="label">
          ¿Cuántas veces has completado ya esta meta?
          <input type="number" className="input" value={finished} onChange={e => onChange(e, "finished")} />
        </label>
        <label className="label">
          Escoge el ícono para la meta
          <select className="input" value={iconP} onChange={e => onChange(e, "iconP")} >
            {icons.map(icon => <option value={icon}>{icon}</option>)}
          </select>
        </label>
      </form>
      <div className={styles.buttons}>
        <button className="button button--black" onClick={create}>Crear</button>
        <button className="button button--gray">Cancelar</button>
      </div>
    </div>
  )
}
