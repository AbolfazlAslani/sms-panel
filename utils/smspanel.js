const axios = require('axios');


module.exports = async (number, name) => {
    randomNumber = Math.floor((Math.random() * 10000))

    var postData = {
        "bodyId": 104832,
        "to": `${number}`,
        "args": [`${name}`, `${randomNumber}`]
    };

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    return await axios.post(`https://console.melipayamak.com/api/send/shared/${process.env.SMS_TOKEN}`, postData, axiosConfig)
        .then((res) => {

            return {
                status: res.status,
                datas: res.data,
            };
        })
        .catch((err) => {
            return err
        })



}

