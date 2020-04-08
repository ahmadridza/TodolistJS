

const textInput = document.querySelector("input");
const button = document.querySelector("button");


button.addEventListener("click", () => {
    // document.getElementById("Display").innerText = textInput.value;
    const NewItem = document.querySelector('#Display')
    const NewLi = document.createElement("li")
    NewLi.innerHTML = textInput.value



    const textInput2 = document.querySelector("input").value

    if (textInput2.length < 4) { alert("Please insert more text") }

    else if (textInput2.length = 0) { alert("Please insert more text") }

    else if

        (NewItem.appendChild(NewLi));

    document.querySelector("input").value = "";

    // Delete function (where when li is is clicked it will delete the element)


    NewLi.addEventListener('click', () => {
        const NewItem = document.querySelector('#Display');
        NewItem.removeChild(NewLi);


    })

});





// textInput.addEventListener("change", () => {
//     document.getElementById("Display").innerText = textInput.value;
// });



