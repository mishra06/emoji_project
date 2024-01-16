// const finder = document.querySelector("#search_field");

function searchEmoji(){
    
    // finder.Value;
    // displayResult(finder);
    // return false;

    let inputValue = document.getElementById("search_field").value;
    // console.log(inputValue);
    displayResult(inputValue);
}

function displayResult(searchQuary = " "){

    let filterData = emojiList.filter((e) =>{

        if(e.description.indexOf(searchQuary) !=-1){
            return true;
        }

        if(e.tags.some(elem=>elem.startsWith(searchQuary))){
            return true;
        }

        if(e.aliases.some(elem=>elem.startsWith(searchQuary))){
            return true;
        }
    })

    let parent = document.querySelector(".result_sec");
    parent.innerHTML=" ";
    filterData.forEach((e) =>{

        let main_sec = document.createElement("div");
        main_sec.classList.add("main_sec_css");

        let result = document.createElement("div");
        result.classList.add("sample");
        result.innerHTML=`

        <div class="result">
            <p class="Emojyy">${e.emoji}</p>
            <p>${e.aliases}</p>
            <p>${e.description}</p>
        </div>`

        main_sec.appendChild(result);
        parent.appendChild(main_sec);
        console.log(main_sec);

    })

}

// finder.addEventListener("keyup", searchemoji);
document.getElementById("search_field").addEventListener("keyup", searchEmoji)

window.onload = () => displayResult();