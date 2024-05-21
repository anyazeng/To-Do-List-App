export default function FilterTasks({ onSelectChange }) {
  return (
    <div>
      <select onChange={(e) => onSelectChange(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not completed</option>
      </select>
    </div>
  );
}
