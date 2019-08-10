var playToggle = function(p, target, play_status) {
    var img_play = find(target, '#id-img-play')
    if (play_status == 0) {
        target.dataset.play = 1
        var action = "pause"
        p.play()
    } else {
        target.dataset.play = 0
        var action = "play"
        p.pause()
    }
    img_play.src = `./img/${action}.png`
}

var bindPlay = function() {
    var p = e('#id-qing-player')
    var play = e('#id-img-play')
    play.addEventListener('click', function(event){
        var target = event.target.parentElement
        var play_status = target.dataset.play
        playToggle(p, target, play_status)
    })
}

var nextPlay = function() {
    var p = e('#id-qing-player')
    p.pause()
    var nextmusic = e('#id-img-after')
    nextmusic.addEventListener('click', function(event) {
        var target = event.target.parentElement
        var id = Number(target.dataset.active)

        var musics = Number(target.dataset.music)
        var nextId = (id + 1) % musics

        target.dataset.active = nextId

        var src = './music/' + nextId + '.flac'
        p.src = src
        p.play()
    })
}

var beforeId = function(musics, id) {
    if (id == 0) {
        return musics - 1
    }
    var before = (id - 1) % musics
    return before
}

var afterPlay = function() {
    var p = e('#id-qing-player')
    p.pause()
    var beforemusic = e('#id-img-before')
    beforemusic.addEventListener('click', function(event) {
        var target = event.target.parentElement
        var id = Number(target.dataset.active)

        var musics = Number(target.dataset.music)
        var before = beforeId(musics, id)


        target.dataset.active = before

        var src = './music/' + before + '.flac'
        p.src = src
        p.play()
    })
}

var voice = function() {
    var v = e('#id-input-v')
    v.addEventListener('click', function() {
        var v = e('#id-input-v')
        log('声音调控')
        v = v.value / 100
        log('声音大小', v)
        var p = e('#id-qing-player')
        p.volume = v
    })

}

var __main = function() {
    bindPlay()
    nextPlay()
    afterPlay()
    bindAll('.control-player-img', 'mouseenter', function(event){
        var target = event.target
        clearClass('.img-active', 'img-active')
        target.classList.add('img-active')
    })
    voice()
}

__main()