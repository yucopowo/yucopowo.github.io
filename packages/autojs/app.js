export function launch(packageName) {
    console.log('app', 'launch', packageName);
}
export function launchApp(appName) {
    console.log('app', 'launchApp', appName);
}
export function openAppSetting(packageName) {
    console.log('app', 'openAppSetting', packageName);
}

export function getAppName(packageName) {
    return packageName;
}

const app = {
    launch,
    launchApp,
    openAppSetting,
    getAppName,
};

export default app;
