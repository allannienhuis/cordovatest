// Wait for the deviceready event before using any of Cordova's device APIs.

import { loadHeap } from "./heap.js";

// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + window.cordova.platformId + '@' + window.cordova.version);
    document.getElementById('deviceready')?.classList.add('ready');

    console.log('device ready');
    loadHeap();
}
