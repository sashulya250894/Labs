var array = [];
for (var i=2; i<100; i++)
{
	array[i]=true
}
var p = 2;
do
{
	for (i=2*p; i<100; i+=p)
	{
		array[i]=false
	}
	for (i=p+1; i<100; i++)
	{
		if (array[i]) break;
	}
	p=i;
} while (p*p<100);
var sum = 0;
for (i=0; i<array.length; i++)
{
	if (array[i])
	{
		sum += i;
	}
}
