try{
  //Locale special malagasy
  const txt_date=document.getElementById("txt-date");
  const lines= versets.split("\n");
  	const getDate=l=>/\d{4}-\d{2}-\d{2}/.exec(l)[0];
      	const getRef=l=>/\d*\s?\w+ \d+,\s?\d+/.exec(l)[0];
      	const getCont=l=>(/,"[^"]+"/.exec(l)[0]).substring(1);
      	console.log(getCont(lines[3]));
   const malagasyLocale = {
  // Abbreviated weekday names (starting with Sunday)
  weekdays: {
    shorthand: ['Alah', 'Alats', 'Tal', 'Alar', 'Alak', 'Zom', 'Asab'],
    longhand: [
      'Alahady',
      'Alatsinainy',
      'Talata',
      'Alarobia',
      'Alakamisy',
      'Zoma',
      'Asabotsy'
    ]
  },
  // Abbreviated month names (starting with January)
  months: {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Mey', 'Jon', 'Jol', 'Aog', 'Sep', 'Okt', 'Nov', 'Des'],
    longhand: [
      'Janoary',
      'Febroary',
      'Martsa',
      'Aprily',
      'Mey',
      'Jona',
      'Jolay',
      'Aogositra',
      'Septambra',
      'Oktobra',
      'Novambra',
      'Desambra'
    ]
  },
  // Other labels (translate as needed)
  rangeSeparator: ' hatramin\'ny ',
  firstDayOfWeek: 1, // 1 = Monday, 0 = Sunday
  time_24hr: true,
  // ordinal function (can remain simple if not needed)
  ordinal: () => ''
};
  //Initialize today verset
      verset=lines.find(x=>getDate(x)==new Date().toISOString().slice(0,10));
      document.getElementById("txt_date").textContent=getDate(verset);
      document.getElementById("title").textContent=getRef(verset);
      document.getElementById("content").textContent=getCont(verset);
  
  //Configuration amzay
  fl_date=flatpickr(".date",{
    dateFormat:"Y-m-d",
    wrap:true,
    locale:malagasyLocale,
    onChange: (a,b)=>{
      document.getElementById("txt_date").textContent=b;
      verset=lines.find(x=>getDate(x)==b);
      document.getElementById("title").textContent=getRef(verset);
      document.getElementById("content").textContent=getCont(verset);
    }
  });
  document.getElementsByClassName("card-header")[0].onclick=e=>fl_date.open();
} catch (e) {
  // Tab to edit
  console.log(e);
}

