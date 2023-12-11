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

// HANDLE PLAYLIST-------------------------------------------------------------------------------------------------------------


const imgMusic = $('.playlist_playing-img')
const nameMusic = $('.playlist_playing-nameMusic')
const nameArtist = $('.playlist_playing-nameArtist')
const linkMusic = $('.playlist_playing-linkMusic')
const timeMusic = $('.playlist_playing-time')
const audio = $('#audio')

const playBtn = $('.playBtn')
const pauseBtn = $('.pauseBtn')
const rangeMusic = $('.timemusic')

const playlistNext = $('.playlist_next-list')
const app = {
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
        {
            count: 7,
            name: 'Vẫn vậy',
            singer: 'okenoc',
            time: `3:42`,
            path: './assets/music/cigar.mp3',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 7,
            name: 'Vẫn vậy',
            singer: 'okenoc',
            time: `3:42`,
            path: './assets/music/cigar.mp3',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 7,
            name: 'Vẫn vậy',
            singer: 'okenoc',
            path: './assets/music/cigar.mp3',
            image: './assets/img/Nhat Minh.jpg'
        },
        {
            count: 7,
            name: 'Vẫn vậy',
            singer: 'okenoc',
            path: './assets/music/cigar.mp3',
            image: './assets/img/Nhat Minh.jpg'
        },
    
    ],
    render(){
        const htmls = this.songs.map(song => {
            return `
            <li class="playlist_next-item row">
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

        // Xử lý kéo đến đâu thì phóng to thu nhỏ đến đấy
        document.onscroll = function (){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            // const a = undefined
            // const aa = a - scrollTop
            // const b = undefined
            // b.style.width = aa > 0 ? aa + 'px' : 0
            // b.style.opacity = aa / a 
        }

        // xử lý khi click play
        playBtn.onclick = function() {
            audio.play()
            playBtn.classList.add('dsNone')
            pauseBtn.classList.add('dsOpen')
        }

        // xử lý khi click pause
        pauseBtn.onclick = function() {
            audio.pause()
            pauseBtn.classList.remove('dsOpen')
            playBtn.classList.remove('dsNone')
        }
        // khi time tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            rangeMusic.value = ((audio.currentTime / audio.duration) * 100)
        }
        // khi rangeMusic thay đổi 
        rangeMusic.onchange = function(e) {
            audio.currentTime = (e.target.value / 100) * audio.duration
        }
    },

    loadCurrentSong(){
        
        imgMusic.src = this.currentSong.image
        nameMusic.textContent = this.currentSong.name
        nameArtist.textContent = this.currentSong.singer
        linkMusic.textContent = this.currentSong.name
        timeMusic.textContent = this.currentSong.time
        audio.src = this.currentSong.path
    },
    // playCurrentSong(){

    // },
    start() {
        // Định nghĩa các thuộc tính cho object app
        this.defineProperties()

        // Lắng nghe / xử lý các sự kiện
        this.handleEvent()
        
        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        // Render playlist
        this.render()
        
    }
} 

app.start()