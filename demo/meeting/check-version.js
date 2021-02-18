const fs = require('fs-extra');
const path = require("path");

console.log(`Checking to see if the installed Amazon Chime JS SDK verison is compatible with the current demo.`);

let componentsSdkVersion = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'node_modules/amazon-chime-sdk-component-library-react/package.json'), 'utf-8')).peerDependencies['amazon-chime-sdk-js'].toString();
let sdkVersion = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'node_modules/amazon-chime-sdk-js/package.json'), 'utf-8')).version.toString();
console.log(`The components demo supports the 'amazon-chime-sdk-js' versions: ${componentsSdkVersion}`);
console.log(`The 'amazon-chime-sdk-js' version installed is: ${sdkVersion}`);

const sdkVersions = sdkVersion.split(`.`);
const componentsSdkVersions = componentsSdkVersion.substring(1).split(`.`);
for (var i = 0; i < sdkVersions.length; i++) {
    if (sdkVersions[i] < componentsSdkVersions[i]) {
        console.error("The SDK version installed in the components library meeting demo is not supported.");
        process.exit(1);
    }
}

console.log("OK: Installed SDK Version is supported on the components meeting demo.");
process.exit(0);

