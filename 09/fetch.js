fetch('data.json')
  .then(function(response){
      console.log(response);
    response.headers().then(function(data){
        console.log('json data:',data);
      });
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })
 .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });