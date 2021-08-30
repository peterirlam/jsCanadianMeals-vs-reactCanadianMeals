$.ajax({
  type: 'get',
  url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
  success: function(res) {
    const newitem = res.meals.map(meal => {
      return `<div class='col-md-3 shadow-lg p-3 mb-5 bg-white rounded text-center m-2'> 
      <p>${meal.strMeal}</p>
      <img src=${meal.strMealThumb} class='img-fluid'/>
      <small>${meal.idMeal}</small>
    </div>`
    });
    $('#myitems').append(newitem);
  },
  error: function(err) {
    console.log(err);
  }
})

/* 
For loop comparison, 245 chars vs 232 chars for .map():
for(let i = 0; i < res.meals.length; i++) {
  let newitem = `<div class='col-md-3 m-2'> 
    <p>${res.meals[i].strMeal}</p>
    <img src=${res.meals[i].strMealThumb} />
    <p>${res.meals[i].idMeal}</p>
  </div>`
  $('#myitems').append(newitem);
} */
