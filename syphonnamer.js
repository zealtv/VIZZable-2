autowatch = 1;

gsyphon = new Global("syphonnamer");

if (typeof gsyphon.currentnumber == "undefined") {
    gsyphon.currentnumber = 1;
}

function getnumber()
{
    outlet(0, "VIZZable" + gsyphon.currentnumber++);
}