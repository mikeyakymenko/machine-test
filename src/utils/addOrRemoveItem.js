export const addOrRemoveItem = (selectedItems, item) => {
  if (!selectedItems.find(selectedItem => selectedItem.name === item.name)) {
    return [...selectedItems, item]
  } else {
    return selectedItems.filter(selectedItem => selectedItem.name !== item.name)
  }
}
