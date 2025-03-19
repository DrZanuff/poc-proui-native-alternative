export function scrollContent(runtime, layerName) {
    const mask = runtime.objects.ScrollMaskNative.getFirstPickedInstance();
    const contentLayer = runtime.layout.getLayer(layerName);
    console.log('Scrolling!');
    if (!mask || !contentLayer) {
        console.log('No Content and Layer');
        return;
    }
    const deltaY = runtime.mouse.getMouseY() || 0;
    const deltaX = runtime.mouse.getMouseX() || 0;
    const minY = mask.y;
    const maxY = mask.y + mask.height - contentLayer.getViewport().height;
    const minX = mask.x;
    const maxX = mask.x + mask.width - contentLayer.getViewport().width;
    const newYPosition = Math.max(minY, Math.min(contentLayer.scrollY + deltaY, maxY));
    const newXPosition = Math.max(minX, Math.min(contentLayer.scrollX + deltaX, maxX));
    console.log('DBG:', { newYPosition, newXPosition });
    contentLayer.scrollY = newYPosition;
    contentLayer.scrollX = newXPosition;
}
