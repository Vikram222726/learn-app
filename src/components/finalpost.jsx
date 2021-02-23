const FinalPost = async (name, email, interests) => {
    try{
        let result = await fetch('https://testpostapi1.p.rapidapi.com/testBatmanApi/name/register',{
            method: 'post',
            headers: {
                'accept': 'success',
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'testpostapi1.p.rapidapi.com',
                'x-rapidapi-key': '28728db04dmsh34d3f140dd059fap1c388ejsn7288577afcf7'
            },
            body: JSON.stringify({
                'name': `${name}`,
                'email': `${email}`,
                'interests': `${interests}`
            })
        });
    }catch(e){
        console.log(e);
    }
}

export default FinalPost;