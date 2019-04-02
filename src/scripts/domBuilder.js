const domBuilder = {
    appendInputForm() {
        let inputForm = `<article>
 <fieldset>
    <label for="lego__creator">Creator:</label>
    <input id="lego__creator" name="lego__creator" type="text" autofocus />
</fieldset>
<fieldset>
<label for="lego__name">Name:</label>
<input id="lego__name" name="lego__name" type="text" autofocus />
</fieldset>
<fieldset>
<select id="lego__color">
<option value="1">Red</option>
<option value="2">Green</option>
<option value="3">Yellow</option>
<option value="4">Blue</option>
<option value="5">Orange</option>
<option value="6">Black</option>
</select>
</fieldset>
<fieldset>
<label for="lego__shape">Shape:</label>
<input id="lego__shape" name="lego__shape" type="text" autofocus />
</fieldset>
<button class="btn lego__save">Save lego Creation</button>
</article>`
        let display = document.querySelector("#display-container")
        display.innerHTML = inputForm;
    }
}