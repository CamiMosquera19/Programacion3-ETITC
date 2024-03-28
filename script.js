var today = new Date();

var day = today.getDate();

var month = today.getMonth();

var year = today.getFullYear();

var el = document.getElementById('footer');

el.innerHTML = '<p>'+  day + - month + - year +  '</p>';
