export const handleDelete = (event) => {
  const listItem = event.target.closest("li");
  listItem.remove();
}