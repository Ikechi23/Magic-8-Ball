var messages = ["Don't count on it.", 
                "Most likely.", 
                "Just wait and see.", 
                "Try again later", 
                "You can rely on it.", 
                "It is decidedly so.", 
                "Without a doubt.", 
                "Very doubtful.", 
                "Outlook not so good.",
                "As I see it.",
                "Reply hazy try again.",
                "Better not tell you now.",
                "Cannot predict now.",
                "Yes, definitely.",
                "My sources say no.",
                "Concentrate and ask again.",
                "Signs point to yes.",
                "My reply is no."
                ]

var square = document.getElementById("square")

square.onclick = function() {
    var chosenMessage = Math.floor(Math.random() * messages.length)
    alert(messages[chosenMessage])
}