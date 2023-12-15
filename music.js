// MODAL PLAYLIST-------------------------------------------------------------------------------------------------------------
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const playlist = $('.playlistJs')
const modalPlaylist = $('.modal_playlist')
const playlistContainer = $('.playlist_container')

playlist.onclick = function(){
    modalPlaylist.classList.add('dsFlex')
}
modalPlaylist.onclick = function(){
    modalPlaylist.classList.remove('dsFlex')
}
playlistContainer.onclick = function(e){
    e.stopPropagation()
}


// Xử lý khi click vào input 
const searchInput = $('.search_input')
const clearInput = $$('.search_icon')[1]
searchInput.onfocus = function() {
    clearInput.classList.add('dsOpen')
}
clearInput.onclick = function() {
    searchInput.value = ''
    clearInput.classList.remove('dsOpen')
}
// HANDLE PLAYLIST-------------------------------------------------------------------------------------------------------------

const artistAvatar = $('.artist_avatar')
const artistName = $('.artist_name')
const musicTitle = $('.music_title')

const PLAYER = 'okenoc-Listen'
const timeEndMusic = $('.timeend_music')
const timeStartMusic = $('.timestart_music')

// biến trong modalPlaylist
const imgMusic = $('.playlist_playing-img')
const nameMusic = $('.playlist_playing-nameMusic')
const nameArtist = $('.playlist_playing-nameArtist')
const linkMusic = $('.playlist_playing-linkMusic')
const timeMusic = $('.playlist_playing-time')
const audio = $('#audio')




// biến trong footer(function of song)
const playBtn = $('.playBtn')
const pauseBtn = $('.pauseBtn')
const rangeMusic = $('.timemusic')
const nextBtn = $('.nextBtn')
const backBtn = $('.backBtn')
const randomBtn = $('.randomBtn')
const repeatBtn = $('.repeatBtn')

const volumeMute = $('.volumeMute')
const volumeS = $('.volumeS')
const volumeM = $('.volumeM')
const volumeL = $('.volumeL')
const rangeVolumeMusic = $('.volumeMusic')


const playlistNext = $('.playlist_next-list')
const app = {
    isRepeat: false,
    isRandom: false,
    isPlay: false,
    config: JSON.parse(localStorage.getItem(PLAYER))  || {},      
    setConfig(key, value){
        this.config[key] = value
        localStorage.setItem(PLAYER, JSON.stringify(this.config))
    },  
    currentIndex : 0,
    songs : [
        {
            count: 1,
            name: 'Fall in love',
            singer: 'okenoc',
            time: `3:24`,
            path: './assets/music/fallinlove.mp3',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 2,
            name: 'Của riêng mình em đó được không',
            singer: 'okenoc',
            time: `2:38`,
            path: './assets/music/cuariengminhemdoduockhong.wav',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 3,
            name: 'Vì là quá suy',
            singer: 'okenoc',
            time: `4:08`,
            path: './assets/music/vilaquasuy.mp3',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 4,
            name: 'Đưa em đi chơi thâu đêm',
            singer: 'okenoc',
            time: `1:08`,
            path: './assets/music/duaemdichoithaudem.mp3',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 5,
            name: 'Coo tar',
            singer: 'okenoc',
            time: `1:24`,
            path: './assets/music/cootar.wav',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 6,
            name: 'Vì là quá suy - Mix',
            singer: 'okenoc',
            time: `4:20`,
            path: './assets/music/vlqsMix.wav',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 7,
            name: 'Vẫn vậy',
            singer: 'okenoc',
            time: `1:01`,
            path: './assets/music/cigar.mp3',
            image: './assets/img/Nhat Minh.jpg'
        },
        
    
    ],
    
    render(){
        const htmls = this.songs.map((song, index) => {
            return `
            <li class="playlist_next-item row ${index === 0 ? 'songActive' : ''}" data-index="${index}">
                <div class="playlist_next-description col l-6 m-6">
                    <div class="playlist_next-count">${song.count}</div>
                    <img class="playlist_next-img" src="${song.image}" alt="">
                    <div class="playlist_musicArtist-wrap">
                        <h4 class="playlist_next-nameMusic">${song.name}</h4>
                        <a href="" class="playlist_next-nameArtist">${song.singer}</a>
                    </div>
                </div>
                <div class="playlist_next-description col l-6 m-6">
                    <a href="" class="playlist_next-linkMusic">${song.name}</a>
                    <div class="playlis_next-option">
                        <h4 class="playlist_next-time">${song.time}</h4>
                    </div>
                </div>
            </li>`
        }).join('')
        playlistNext.innerHTML = htmls

       
        
        
    },
    defineProperties() {
        Object.defineProperty(this, 'currentSong', {
            get(){
                return this.songs[this.currentIndex]
            }
        })
    },   
    handleEvent() {

        // Xử lý avatar quay 
        const avatarAnimate = artistAvatar.animate([
            {transform : 'rotate(360deg)'}
        ],{
            duration: 20000,
            iterations: Infinity
        })
        avatarAnimate.pause()
        // Xử lý kéo đến đâu thì phóng to thu nhỏ đến đấy
        document.onscroll = function (){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            // const a = undefined
            // const aa = a - scrollTop
            // const b = undefined
            // b.style.width = aa > 0 ? aa + 'px' : 0
            // b.style.opacity = aa / a 
        }

        //khi song play 
        audio.onplay = function(){
            playBtn.classList.add('dsNone')
            pauseBtn.classList.add('dsOpen')
            avatarAnimate.play()
        }
        //khi song pause 
        audio.onpause = function(){
            playBtn.classList.remove('dsNone')
            pauseBtn.classList.remove('dsOpen')
            avatarAnimate.pause()
        }
        // xử lý next song khi audio ended
        audio.onended = function () {
            if(!app.isRepeat){
                nextBtn.click()
            }
            audio.play()
        }
        // xử lý khi click play
        playBtn.onclick = function() {
            app.isPlay = !app.isPlay
            audio.play()          
        }
        // xử lý khi click pause
        pauseBtn.onclick = function() {
            app.isPlay = !app.isPlay
            audio.pause()
        }
        // Xử lý khi ấn space
        document.onkeydown = function (e){
            if(e.which === 32 && app.isPlay) {
                pauseBtn.click()
            }
            // if(e.which === 32) {
            //     playBtn.click()
            // }
        }
        // xử lý khi click next
        nextBtn.onclick = function() {
            if(app.isRandom){
                app.randomSong()
            }
            else {
                app.nextSong()
            }
            audio.play()            
        }
        // Xử lý khi click back
        backBtn.onclick = function() {
            if(app.isRandom){
                app.randomSong()
            }
            else {
                app.backSong()
            }            
            audio.play()
        }
        // Xử lý khi click random
        randomBtn.onclick = function() {
            app.isRandom = !app.isRandom
            randomBtn.classList.toggle('active', app.isRandom)
            app.setConfig('isRandom', app.isRandom)
        }
        // Xử lý khi click repeat
        repeatBtn.onclick = function() {
            app.isRepeat = !app.isRepeat
            repeatBtn.classList.toggle('active', app.isRepeat)
            app.setConfig('isRepeat', app.isRepeat)
        }
        // xử lý khi click vào chỗ bất kỳ trong playlistNext (dùng closest: tìm ra cha hoặc con)
        playlistNext.onclick = function(e) 
        {   const songNodeNoActive = e.target.closest('.playlist_next-item:not(.songActive)')

            // Xử lý play khi ấn vào bài hát bất kỳ trong playlistNext (không tính song active)
            if(songNodeNoActive) {
                app.currentIndex = songNodeNoActive.dataset.index
                app.loadCurrentSong()
                audio.play()
            }

            const songNode = e.target.closest('.playlist_next-item')
            $('.songActive').classList.remove('songActive')
            songNode.classList.add('songActive')
        }

        // khi time tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            rangeMusic.value = ((audio.currentTime / audio.duration) * 100)  
            app.setConfig('rangeMusic', rangeMusic.value)          
        }
        // khi rangeMusic thay đổi 
        rangeMusic.onchange = function(e) {
            audio.currentTime = (e.target.value / 100) * audio.duration
            app.setConfig('currentTime', audio.currentTime)
        }
        
        // xử lý khi kéo thanh âm lượng
        audio.volume = 0
        rangeVolumeMusic.onchange  = function() {
            audio.volume = rangeVolumeMusic.value / 100 
            app.setConfig('volumeMusic', audio.volume)
            if(audio.volume == 0) {
                $('.volumeActive').classList.remove('volumeActive')
                volumeMute.classList.add('volumeActive')
            }
            if(audio.volume > 0.01 && audio.volume <= 0.35 ) {
                $('.volumeActive').classList.remove('volumeActive')
                volumeS.classList.add('volumeActive')
            }
            if(audio.volume > 0.35 && audio.volume <= 0.7 ) {
                $('.volumeActive').classList.remove('volumeActive')
                volumeM.classList.add('volumeActive')
            }
            if(audio.volume > 0.7 && audio.volume <= 1 ) {
                $('.volumeActive').classList.remove('volumeActive')
                volumeL.classList.add('volumeActive')
            }
        }
        // xử lý khi âm lượng bài hát thay đổi
        audio.onvolumechange = function() {
            rangeVolumeMusic.value = audio.volume * 100
            app.setConfig('rangeVolumeMusic', rangeVolumeMusic.value)
        }
        
    },

    loadCurrentSong(){
        artistAvatar.src = this.currentSong.image
        artistName.textContent = this.currentSong.singer
        musicTitle.textContent = this.currentSong.name
        timeEndMusic.textContent = this.currentSong.time
        
        imgMusic.src = this.currentSong.image
        nameMusic.textContent = this.currentSong.name
        nameArtist.textContent = this.currentSong.singer
        linkMusic.textContent = this.currentSong.name
        timeMusic.textContent = this.currentSong.time
        
        audio.src = this.currentSong.path  
    },
    loadConfig(){
        // Random / repeat
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
        randomBtn.classList.toggle('active', app.isRandom)
        repeatBtn.classList.toggle('active', app.isRepeat)
        // Lưu tiến độ bài hát
        rangeMusic.value = this.config.rangeMusic
        audio.currentTime = this.config.currentTime
        // Lưu âm lượng bài hát
        audio.volume = this.config.volumeMusic
        rangeVolumeMusic.value = this.config.rangeVolumeMusic
        
    },
    nextSong(){
        this.currentIndex++        
        if(this.currentIndex == this.songs.length){
            this.currentIndex = 0
        }
        
        this.loadCurrentSong()  
        
    },
    backSong(){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()   
    },
    randomSong() {
        let randomIndex
        do {
            randomIndex = Math.floor(Math.random() * this.songs.length)
        } while(randomIndex === this.currentIndex)

        this.currentIndex = randomIndex
        this.loadCurrentSong()
        
    },
    start() {
        // Định nghĩa các thuộc tính cho object app
        this.defineProperties()

        // Lắng nghe / xử lý các sự kiện
        this.handleEvent()
        
        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        //Tải cấu hình từ config vào ứng dụng
        this.loadConfig()

        // Render playlist
        this.render()
        
    }
} 

app.start()