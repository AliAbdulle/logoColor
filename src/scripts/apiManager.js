const data = {
    postLego (logToSave) {
        fetch("http://localhost:8088/logo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(logToSave)
        })
    }
}

const color = {
    colorLogo (colorToSave) {
        fetch("http://localhost:8088/logo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(colorToSave)

        })
    }
}