const MODAL_TRANSITION_TIME = 1

export function setIsModalOpen(runtime: IRuntime, status: boolean) {
  const modal = runtime.objects.ModalBehavior.getFirstPickedInstance()

  if (!modal) {
    return
  }

  if (modal.instVars.isOpen === true && status === true) {
    return
  }

  modal.instVars.isOpen = status

  if (status === true) {
    const targetPosition = modal.instVars.endPosition
      .split(',')
      .map((coord) => Number(coord))

    const ease: EaseName = 'out-elastic'
    modal.behaviors.Tween.startTween(
      'position',
      targetPosition,
      MODAL_TRANSITION_TIME,
      ease
    )

    return
  }

  const targeOriginalPosition = modal.instVars.position
    .split(',')
    .map((coord) => Number(coord))

  const ease: EaseName = 'out-elastic'
  modal.behaviors.Tween.startTween(
    'position',
    targeOriginalPosition,
    MODAL_TRANSITION_TIME,
    ease
  )
}
