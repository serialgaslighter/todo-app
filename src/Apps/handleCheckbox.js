export const handleCheckbox = (event) => {
  const listItem = event.target.closest("li");
  listItem.classList.toggle("checked");
}