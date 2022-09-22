console.log('is connected')



var help = document.querySelectorAll('button')

function PlayAudio(filename){
    this.filename = 'source/' + filename + '.mp3'
    this.Play = function(){
        var audio = new Audio(filename)
        console.log(audio)
        audio.play()
    }
}

help.forEach(e => {
    e.addEventListener('click',function(){
        if (this.innerHTML == 'a'){
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
        }
        else if (this.innerHTML == 'l'){
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
        }
        else if (this.innerHTML == 'w'){
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
        }
        else if (this.innerHTML == 's'){
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
        }
        else if (this.innerHTML == 'd'){
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
        }
        else if (this.innerHTML == 'j'){
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
        }
        else{
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
        }
        
    })    
});

document.addEventListener('keypress',function(e){
    if (e.key == 'a'){
        var audio = new Audio('sounds/kick-bass.mp3')
        audio.play()
    }
    else if (e.key == 'l'){
        var audio = new Audio('sounds/crash.mp3')
        audio.play()
    }
    else if (e.key == 'w'){
        var audio = new Audio('sounds/tom-1.mp3')
        audio.play()
    }
    else if (e.key == 's'){
        var audio = new Audio('sounds/tom-2.mp3')
        audio.play()
    }
    else if (e.key == 'd'){
        var audio = new Audio('sounds/tom-3.mp3')
        audio.play()
    }
    else if (e.key == 'j'){
        var audio = new Audio('sounds/tom-4.mp3')
        audio.play()
    }
    else{
        var audio = new Audio('sounds/snare.mp3')
        audio.play()
    }
    
})