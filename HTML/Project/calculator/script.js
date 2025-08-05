let display = document.getElementById("display");
function press(num)
{
    display.value += num;
}

function clearDisplay()
{
    display.value = "";
}
function calculate()
{
    try{
        display.value=
    eval(display.value);
    }
    catch (e)
    {
        display.value = "Error";
    }
}

function add()
{
    display.value += "+";
}
function subtract()
{
    display.value += "-";
}
function multiply()
{
    display.value += "*";
}
function divide()
{
    display.value += "/";
}
function bracket()
{
    display.value += "(";
}
function bracket2()
{
    display.value += ")";
}
function back()
{
    display.value = display.value.slice(0,-1);
}
function dot()
{
    display.value += ".";
}