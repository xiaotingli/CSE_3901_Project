
var memoryVal;


function save()
{
	memoryVal = eval(document.Calc.TextWindow.value);	
}

function recall()
{
	document.Calc.TextWindow.value = memoryValue;
}

function clear()
{
	memoryVal = 0;
	
}

function memAdd()
{
	document.Calc.TextWindow.value = eval(document.Calc.TextWindow.value) + memoryVal;
}

function memSub()
{
	document.Calc.TextWindow.value = eval(document.Calc.TextWindow.value) - memoryVal;
}

function windowAlter(val)
{
	document.Calc.TextWindow.value +=val;
}

function sqrt()
{
	document.Calc.TextWindow.value = Math.sqrt(Number(eval(document.Calc.TextWindow.value)));
	
}

function inver()
{
	document.Calc.TextWindow.value = 1 / (eval(document.Calc.TextWindow.value));
}

function mod()
{
	document.Calc.TextWindow.value = (eval(document.Calc.TextWindow.value));	
}

function negative()
{
	document.Calc.TextWindow.value = -1 * (eval(document.Calc.TextWindow.value));
}

