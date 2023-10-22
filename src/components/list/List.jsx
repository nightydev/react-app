import Task from "./Task";

const list = [{
  "id": "1",
  "details": "Correr",
  "period": "día",
  "event": 1,
  "icon": "🏃",
  "taskT": 365,
  "time": "2023-01-01",
  "finished": 5
},
{
  "id": "2",
  "details": "Leer libros",
  "period": "año",
  "event": 6,
  "icon": "📚",
  "taskT": 12,
  "time": "2023-01-01",
  "finished": 0
},
{
  "id": "3",
  "details": "Viajar",
  "period": "mes",
  "event": 1,
  "icon": "✈️",
  "taskT": 60,
  "time": "2030-01-01",
  "finished": 40
}];

export default function List() {
  return (
    list.map(task => <Task {...task}></Task>)
  )
}
