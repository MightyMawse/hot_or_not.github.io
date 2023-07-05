async function HTTPPost(ip){
    var requestObj = {
        "clientIP": ip,
        "cmd": "getmembers"
    };

    var jRequest = JSON.stringify(requestObj)
    var encoded = encodeURIComponent(jRequest);
    console.log(jRequest);
    console.log(encoded);
    const response = await fetch("http://124.183.24.71:25565/", {
        method: "POST",
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: encoded
    })
    .catch(error => {
        console.log(error);
    });
    const content = await response.json();
    console.log(content);

    var callbackObj = JSON.parse(content);
    var imgSrc1 = 'data:image/png;base64,' + callbackObj.content[2];
    var imgSrc2 = 'data:image/png;base64,' + callbackObj.content[3];
    document.getElementById("img1").src = imgSrc1;
    document.getElementById("img2").src = imgSrc2;

    document.getElementById("name1").innerText = callbackObj.content[0];
    document.getElementById("name2").innerText = callbackObj.content[1];
}