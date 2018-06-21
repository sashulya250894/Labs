function sum(n) {
  if (n == 1) return 1;
  return n + sum(n - 1);
}
alert( sum(100) );

/*function sum(n) {
  for (var i = 0; i < n; i++) 
  {
	alert( i + sum(n - 1) );
  }
  if (n == 1) return 1;
  return n + sum(n - 1);
}
alert( sum(100) );*/