require('dotenv').config();
console.log(process.env.API_KEY)
const endPoint = process.env.API_KEY


// Print out value of API key stored in .env file

async function getImage(query){

    try{
        const baseUrl = 'https://api.giphy.com/v1/gifs/search';
        const url = `${baseUrl}?api_key=${endPoint}&q=${encodeURIComponent(query)}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        const response = await fetch(url)

        const data = await response.json()
        const specificUrl = data.data[0].url
        console.log(specificUrl)
        return specificUrl



    }catch(err){
        console.error(err)
    }
  
}

getImage('cat')

