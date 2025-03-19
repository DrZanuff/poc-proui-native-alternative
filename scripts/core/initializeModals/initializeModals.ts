enum SLIDE_POSITIONS {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

export function initializeModals(runtime: IRuntime) {
  const modals = runtime.objects.ModalBehavior.getAllInstances()

  const viewportCenterPosition = {
    x: runtime.viewportWidth / 2,
    y: runtime.viewportHeight / 2,
  }

  modals.forEach((modal: InstanceType.ModalBehavior) => {
    modal.layer
    const children = [...modal.allChildren()]
    children.forEach((child) => child.moveToLayer(modal.layer))

    const initialPosition = {
      x: 0,
      y: 0,
    }

    modal.instVars.isOpen = false

    switch (modal.instVars.slideDirection) {
      case SLIDE_POSITIONS.BOTTOM:
        initialPosition.x = runtime.viewportWidth / 2
        initialPosition.y = runtime.viewportHeight + modal.height / 2
        break
      case SLIDE_POSITIONS.LEFT:
        initialPosition.x = -(modal.width / 2)
        initialPosition.y = runtime.viewportHeight / 2
        break
      case SLIDE_POSITIONS.RIGHT:
        initialPosition.x = runtime.viewportWidth + modal.width / 2
        initialPosition.y = runtime.viewportHeight / 2
        break
      case SLIDE_POSITIONS.TOP:
      default:
        initialPosition.x = runtime.viewportWidth / 2
        initialPosition.y = -(modal.height / 2)
        break
    }

    modal.instVars.endPosition = `${viewportCenterPosition.x},${viewportCenterPosition.y}`
    modal.instVars.position = `${initialPosition.x},${initialPosition.y}`
    modal.x = initialPosition.x
    modal.y = initialPosition.y
  })
}
