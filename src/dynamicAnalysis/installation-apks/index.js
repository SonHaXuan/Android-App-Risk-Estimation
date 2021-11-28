const { exec, execSync } = require("child_process");
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const APKS_FOLDER = path.join(__dirname, '/data/apks')
main()

async function main() {

    let packages = await execSync("adb shell pm list packages", { encoding: 'utf8' });
    packages = packages.split('\n')
    const apks = fs.readdirSync(APKS_FOLDER)
    for (const apk of apks) {
        console.log(`Installing ${apk}...`)
        const apkPath = `${APKS_FOLDER}/${apk}`
        const command = `adb install ${apkPath}`
        await execSync(command)
    }
    
    let newPackages = await execSync("adb shell pm list packages", { encoding: 'utf8' });
    newPackages = newPackages.split('\n')

    const installedPackages = _.difference(newPackages, packages)
    console.log("Installed packages: ", installedPackages)


    setInterval(() => {
        console.log("Uninstalling package name: ", installedPackages)
        for (const installedPackage of installedPackages) {
            const packageName = installedPackage.split(':')[1]

            exec(`adb shell pm uninstall --user 0 ${packageName}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
            })
        }
        
        console.log("DONE")
    }, 1000 * 10)
}