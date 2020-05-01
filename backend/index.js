const express = require('express');
const app = express();



app.get ('/', (request, response) => {
  
    
    return response.json(
        'https://covid19.mathdro.id/api/countries/Br'

    );
});

  
app.listen(3333); 