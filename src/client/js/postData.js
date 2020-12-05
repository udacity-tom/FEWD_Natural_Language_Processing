//postdata submission using json encoding!!
const postData = async (url = '', data= {}) => {
    //Clears error and results
    Client.clearUI()
    const response = await fetch('http://localhost:8081'+url,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();//NOTE: v. important! wrt server config for json encoding
        return newData;
    } catch(error) {
        console.log("error",error);
    }
}

export { postData }