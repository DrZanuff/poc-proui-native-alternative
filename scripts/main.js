"use strict";
runOnStartup(async (runtime) => {
    runtime.addEventListener('beforeprojectstart', () => OnBeforeProjectStart(runtime));
});
async function OnBeforeProjectStart(runtime) {
    runtime.addEventListener('tick', () => Tick(runtime));
}
function Tick(runtime) {
}
