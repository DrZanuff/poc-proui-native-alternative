interface GridProps {
  grid: InstanceType.GridBehavior
  callback: () => IWorldInstance[]
  totalElements?: number
}

export function generateGrid({ grid, callback, totalElements }: GridProps) {
  if (!grid) {
    return
  }

  const gridItems = callback()

  if (!gridItems.length) {
    return
  }

  grid.isVisible = false

  const columns = grid.instVars.columns
  const hSpacing = grid.instVars.horizontalSpacing
  const vSpacing = grid.instVars.verticalSpacing

  const limit = totalElements || gridItems.length
  const total = Math.min(limit, gridItems.length)
  const newElements = gridItems.slice(0, total)

  gridItems.slice(total).forEach((element) => element.destroy())

  const gridItemModel = gridItems[0]
  const itemWidth = gridItemModel.width
  const itemHeight = gridItemModel.height

  newElements.forEach((element, index) => {
    const row = Math.floor(index / columns) // Linha atual
    const col = index % columns // Coluna atual

    element.x = grid.x + col * (itemWidth + hSpacing)
    element.y = grid.y + row * (itemHeight + vSpacing)

    grid.addChild(element)
  })
}
