export const fetchData = () => {
    fetch('https://gitfilm-675bb.firebaseio.com/asy-app.json')
        .then(response => response.json())
        .then(json => console.log(json))
}
