
var memoryVal;


function save()
{
	memoryVal = eval(document.Calc.TextWindow.value);	
	document.getElementById("Memory").innerHTML=(memoryVal);
}

function recall()
{
	document.Calc.TextWindow.value = eval(memoryVal);
	
}

function memClear()
{
	memoryVal = '0';
	document.getElementById("Memory").innerHTML=(memoryVal);
	
}

function memAdd()
{
	memoryVal = eval(document.Calc.TextWindow.value) + memoryVal;
	document.getElementById("Memory").innerHTML=(memoryVal);
}

function memSub()
{
	memoryVal = memoryVal - eval(document.Calc.TextWindow.value);
	document.getElementById("Memory").innerHTML=(memoryVal);
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

