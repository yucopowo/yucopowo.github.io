class Device {
    width = window.SCREEN_WIDTH;
    height = window.SCREEN_HEIGHT;

    // 返回当前的(手动)亮度。范围为0~255。
    getBrightness() {
        return 255;
    }
    setBrightness(b) {
        console.log('Device', 'setBrightness', b);
    }
    isScreenOn() {
        return true;
    }
    wakeUp() {
        return true;
    }
    wakeUpIfNeeded() {
        console.log('Device', 'wakeUpIfNeeded');
    }
    keepScreenOn(timeout) {
        console.log('Device', 'keepScreenOn', timeout);
    }
    cancelKeepingAwake() {
        console.log('Device', 'cancelKeepingAwake');
    }


}

const device = new Device();

export default device;
