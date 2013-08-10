autowatch = 1;

g = new Global("vizzablenamer");

if (typeof g.currentnumber == "undefined") {
    g.currentnumber = 1;
}

function getnumber()
{
    outlet(0, "VIZZable" + g.currentnumber++);
}