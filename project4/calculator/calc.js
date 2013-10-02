
var memoryVal = '';
var entry1 = '';
var entry2 = '';
var currentEntry = true;
var inFunction = false;
//True = entry1 needs entered
//false = entry2 needs entered

function save()
{
	memoryVal = document.Calc.TextWindow.value;	
	document.getElementById("Memory").innerHTML=(memoryVal);
}

function recall()
{
	if(currentEntry)
	{
		entry1 = memoryVal;
	}
	else
	{
		entry2 = memoryVal;
	}
	
	if(currentEntry)
	{
		document.Calc.TextWindow.value = memoryVal;
	}
}

function memClear()
{
	memoryVal = '';
	document.getElementById("Memory").innerHTML=(memoryVal);
	
}

function memAdd()
{
	memoryVal = document.Calc.TextWindow.value + memoryVal;
	document.getElementById("Memory").innerHTML=(memoryVal);
}

function memSub()
{
	memoryVal = memoryVal - eval(document.Calc.TextWindow.value);
	document.getElementById("Memory").innerHTML=(memoryVal);
}

function windowAlter(val)
{
	if(currentEntry)
	{
		entry1 += val;
		val = entry1;
	}
	else{
		entry2 += val;
		val = entry2;
	}
	
	document.Calc.TextWindow.value = val;
}

function arithmetic(val)
{
	var result;
	currentEntry = false;
	if(val === '/')
	{
		result = entry1 / entry2;
	}
	if(val === '*')
	{
		result = entry1 * entry2;
	}
	if(val === '-')
	{
		result = entry1 - entry2;
	}
	if(val === '+')
	{
		result = entry1 + entry2;
	}
	if(val === '%')
	{
		result = entry1 % entry2;
	}
	
	
	document.Calc.TextWindow.Value = result
}

function del()
{
	var txtlength = String(document.Calc.TextWindow.value.length)
	document.Calc.TextWindow.value = document.Calc.TextWindow.value.substring(0, (txtlength-1));
	if(currentEntry)
	{
		entry1 = document.Calc.TextWindow.value;
	}
	else{
		entry2 = document.Calc.TextWindow.value;
	}
}

function sqrt()
{
	
	document.Calc.TextWindow.value = Math.sqrt(Number(eval(document.Calc.TextWindow.value)));
	
}

function inver()
{
	document.Calc.TextWindow.value = 1 / (eval(document.Calc.TextWindow.value));
}

function neg()
{
	
	document.Calc.TextWindow.value = -1 * (eval(document.Calc.TextWindow.value));
}

function equals()
{
		var result
		if(addFunction)
		{
			resutl
}