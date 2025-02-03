autowatch = 1;

gspout = new Global("spoutnamer");

if (typeof gspout.currentnumber == "undefined") {
    gspout.currentnumber = 1;
}

function getnumber()
{
    outlet(0, "VIZZable" + gspout.currentnumber++);
}