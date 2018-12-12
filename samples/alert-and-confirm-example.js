require('../dist');

const ok = confirm("Are you ok?");

if (ok) {
    alert("That's great to hear!");
}
process.exit(0);

