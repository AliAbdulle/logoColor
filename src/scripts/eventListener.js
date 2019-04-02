const eventHandlers = {
    formSubmitEventListener() {
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const shape = document.querySelector("#lego__shape").value;
        const color = document.querySelector("#lego__color").value;

        // create an objects
        const objectLogo = {
            objCreator: creator,
            objName: name,
            objShape: shape,
            objColor: color
        }
        data.postLego(objectLogo)
    },


    colorSubmitEventListener() {
        const color = document.querySelector("#lego__color").value;
        const colorLego = {
            color: red,
            color: green,
            color: yellow,
            color: blue,
            color: white,
            color: orange,
            color: black

        }
        color.colorLogo(colorLego);
    }
}