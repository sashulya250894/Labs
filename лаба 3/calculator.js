function calc()
{
	this.read = function() 
	{
		this.a = +prompt('a?', 0);
		this.b = +prompt('b?', 0);
	};
	this.mul = function() 
	{
		return this.a * this.b;
	};
	this.sum = function() 
	{
		return this.a + this.b;
	};
}

var calculator = new calc();
