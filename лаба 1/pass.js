var user = prompt('Кто пришёл?', '');
if (user == 'Админ') 
{
  var pass = prompt('Пароль?', '');
  if (pass == 'Чёрный Властелин') 
  {
    alert( 'Добро пожаловать!' );
  } 
	else 
		if (pass == null) 
		{ 
			alert( 'Вход отменён' );
		} 
		else 
		{
			alert( 'Пароль неверен' );
		}
} 
else 
	if (user == null) 
	{ 
		alert( 'Вход отменён' );
	} 
	else 
	{
		alert( 'Я вас не знаю' );
	}