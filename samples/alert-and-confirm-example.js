const nativeCanvas = require('../dist');
const ok = nativeCanvas.confirm("Are you ok?");

if (ok) {
    nativeCanvas.alert("That's great to hear!");
}
process.exit(0);

