 async function getColors(){
    const colors = []
    const url = 'http://colormind.io/api/'
    const options = {
        method : "POST",
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify({
            model : 'default'
        })
    }
    const result = await fetch(url, options)
    // console.log(await result.json());
    return colors.concat((await result.json()).result)
 }

 function RGBToHexa(rgb){
    let hex = rgb.map(color => {
        let hexValue = color.toString(16);
        return hexValue.length == 1 ? '0' + hexValue : hexValue;
    }).join('');

    return '#' + hex;

 }

 async function handleGenerateColors(){
    const rgbColors = await getColors()
    const colors = []
    for (let i = 0 ; i < rgbColors.length ; i++) {
        colors.push({
            hexa : RGBToHexa(rgbColors[i]),
            rbg : rgbColors[i]
        })
}
console.log(colors);
}



handleGenerateColors()