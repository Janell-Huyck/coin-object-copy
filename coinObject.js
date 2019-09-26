const coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
        return 
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function() { 
        if (this.state === 0){
            return "Heads"
        } else if (this.state === 1) {
            return "Tails"
        }
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: () => {
        const image = document.createElement('img');
        if (coin.state === 0) {
            image.className = "coin heads"            
            image.src = "images/bearFront.png";
            image.alt = "bear front";
        
            // image.height= "400px";
            // image.title = "Heads"
        } else if (coin.state === 1){
            image.className = "coin tails"
            image.src = "images/bearBack.png";
            image.alt = "bear back";
            // image.height= "400px";
            // image.title = "Tails"
        }
        // coin.image = image
        return image;
        // "url('img/tree.png')

        // function myFunction() {
        //     var x = document.getElementById("myImg").src;
        //     document.getElementById("demo").innerHTML = x;
        //   }
        
    }
    // 3. One point: Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
}

function display20Flips() {
    const results = [];
    for (let i = 1; i <= 20; i++){
        coin.flip()
        let flipResults = coin.toString()
        // let newDiv = document.createTextNode(flipResults)
        // document.body.appendChild(newDiv)
        results.push(flipResults)
    }

    return results
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
}

function display20Images() {
    var newImage 
    const results = [];
    for (let i = 1; i <= 20; i++) {
        coin.flip()
        results.push(coin.toString())
        console.log(results)
        newImage = coin.toHTML()
        document.body.appendChild(newImage)
        
    }
    
    return results
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}

results = display20Flips()
let newText = document.createTextNode("The text result of 20 flips is: " + results)
document.body.appendChild(newText)
newText = document.createTextNode("The picture results of another 20 flips is: ")
document.body.appendChild(newText)
display20Images()

// document.getElementById("body").appendChild(image);
//Image by <a href="https://pixabay.com/users/officialkaywille-444458/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=447418">Kay Wille</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=447418">Pixabay</a>