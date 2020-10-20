function jsonp(url, data, callback){
    return new Promise( (resolve, reject) => {
        window[callback] = function (data){
            resolve(data)
        }
        let script = document.createElement('script');
        url += `?successCallback=${callback}`
        if(data){
            Object.keys(data).forEach(key=>{
              url += `&${key}=${data[key]}`
            })
          }
        script.src = url
        document.body.appendChild(script)
    } )
}