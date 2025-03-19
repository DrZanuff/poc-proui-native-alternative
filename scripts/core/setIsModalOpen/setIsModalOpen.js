const MODAL_TRANSITION_TIME = 1;
export function setIsModalOpen(runtime, modalName, status) {
    const pickedModal = runtime.objects.ModalBehavior.getAllInstances().find((modal) => modal.instVars.modalName === modalName);
    if (!pickedModal) {
        return;
    }
    if (pickedModal.instVars.isOpen === true && status === true) {
        return;
    }
    if (pickedModal.instVars.isOpen === false && status === false) {
        return;
    }
    pickedModal.instVars.isOpen = status;
    if (status === true) {
        const targetPosition = pickedModal.instVars.endPosition
            .split(',')
            .map((coord) => Number(coord));
        const ease = 'out-elastic';
        pickedModal.behaviors.Tween.startTween('position', targetPosition, MODAL_TRANSITION_TIME, ease);
        return;
    }
    const targeOriginalPosition = pickedModal.instVars.position
        .split(',')
        .map((coord) => Number(coord));
    const ease = 'in-sine';
    pickedModal.behaviors.Tween.startTween('position', targeOriginalPosition, MODAL_TRANSITION_TIME / 4, ease);
}
