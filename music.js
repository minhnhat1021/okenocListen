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


const searchInput = $('.search_input')
const clearInput = $$('.search_icon')[1]

const songSearch = $('.song__search-content')
const historySearch = $('.history__search-content')
// HANDLE PLAYLIST-------------------------------------------------------------------------------------------------------------

const artistAvatar = $('.artist_avatar')
const artistName = $('.artist_name')
const musicTitle = $('.music_title')
const musicLyric = $('.musicLyric')

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
    isActiveRandom: false,
    isActiveRepeat: false,
    isInputSearchFocus: false,
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
            name: 'Chạy ngay đi',
            singer: 'Sơn Tùng M-TP',
            time: `4:08`,
            path: './assets/music/chayngaydi.mp3',
            image: './assets/img/sontung.jpg',
            lyric: `
            Good boy

            Từng phút cứ mãi trôi xa phai nhòa dần kí ức giữa đôi ta
            Từng chút nỗi nhớ hôm qua đâu về lạc bước cứ thế phôi pha
            Con tim giờ không cùng chung đôi nhịp
            Nụ cười lạnh băng còn đâu nồng ấm thân quen
            Vô tâm làm ngơ thờ ơ tương lai ai ngờ
            Quên đi mộng mơ ngày thơ tan theo sương mờ

            Mưa lặng thầm đường vắng chiều nay
            In giọt lệ nhòe khóe mắt sầu cay
            Bao hẹn thề tàn úa vụt bay
            Trôi dạt chìm vào những giấc nồng say
            Quay lưng chia hai lối, còn một mình anh thôi
            Giả dối bao trùm bỗng chốc lên ngôi
            Trong đêm tối bầu bạn cùng đơn côi
            Suy tư anh kìm nén đã bốc cháy yêu thương trao em rồi
            Đốt sạch hết

            Son môi hồng vương trên môi bấy lâu
            Hương thơm dịu êm mê man bấy lâu (đốt sạch hết)
            Anh không chờ mong quan tâm nữa đâu
            Tương lai từ giờ như bức tranh em quên tô màu (đốt sạch hết)
            Xin chôn vùi tên em trong đớn đau
            Nơi hiu quạnh tan hoang ngàn nỗi đau (đốt sạch hết)
            Dư âm tàn tro vô vọng phía sau
            Đua chen dày vò xâu xé quanh thân xác nát nhàu

            Chạy ngay đi, trước khi
            Mọi điều dần tồi tệ hơn
            Chạy ngay đi, trước khi
            Lòng hận thù cuộn từng cơn
            Tựa giông tố đến bên ghé thăm
            Từ nơi hố sâu tối tăm
            Chạy đi, trước khi
            Mọi điều dần tồi tệ hơn
            Không còn ai cạnh bên em ngày mai
            Tạm biệt một tương lai ngang trái
            Không còn ai cạnh bên em ngày mai
            Tạm biệt một tương lai ngang trái
            Không còn ai cạnh bên em ngày mai
            Tạm biệt một tương lai ngang trái
            Không còn ai cạnh bên em ngày mai
            Tạm biệt một tương lai ngang trái
            
            Yeah, buông bàn tay
            Buông xuôi hi vọng buông bình yên (buông)
            Đâu còn nguyên tháng ngày rực rỡ phai úa hằn sâu triền miên
            Vết thương cứ thêm, khắc thêm, mãi thêm
            Chà đạp vùi dập dẫm lên tiếng yêu ấm êm
            Nhìn lại niềm tin từng trao giờ sao
            Sau bao ngu muội sai lầm anh vẫn yếu mềm
            Căn phòng giam cầm thiêu linh hồn cô độc em trơ trọi kêu gào xót xa
            Căm hận tuôn trào dâng lên nhuộm đen ghì đôi vai đừng mong chờ thứ tha
            (Ah, chính em gây ra mà
            Những điều vừa diễn ra
            Chính em gây ra mà, chính em gây ra mà
            Những điều vừa diễn ra
            Hết thật rồi)`
        },
        {
            count: 2,
            name: 'Khuôn mặt đáng thương',
            singer: 'Sơn Tùng M-TP',
            time: `4:08`,
            path: './assets/music/khuonmatdangthuong.mp3',
            image: './assets/img/sontung.jpg',
            lyric: ``
        },
        {
            count: 3,
            name: 'Buông đôi tay nhau ra',
            singer: 'Sơn Tùng M-TP',
            time: `2:38`,
            path: './assets/music/buongdoitaynhaura.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ` `
        },
        {
            count: 4,
            name: 'Chúng ta không thuộc về nhau',
            singer: 'Sơn Tùng M-TP',
            time: `3:24`,
            path: './assets/music/chungtakhongthuocvenhau.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 5,
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng M-TP',
            time: `3:24`,
            path: './assets/music/muonroimasaocon.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 6,
            name: 'Em là',
            singer: 'Mono',
            time: `3:24`,
            path: './assets/music/emla.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 7,
            name: 'Trí trá',
            singer: 'Wxrdie',
            time: `3:24`,
            path: './assets/music/tritra.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 8,
            name: 'Finesse',
            singer: 'Bruno Mars ft. Cardi B',
            time: `1:08`,
            path: './assets/music/finesse.mp3',
            image: './assets/img/sontung.jpg',
            lyric:
            ``
        },
        {
            count: 9,
            name: 'Please me',
            singer: 'Bruno Mars ft. Cardi B',
            time: `1:24`,
            path: './assets/music/pleaseme.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 10,
            name: 'Feel Special',
            singer: 'Twice',
            time: `1:24`,
            path: './assets/music/FeelSpecial.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 11,
            name: `i won't let you feel alone again`,
            singer: 'demxntia',
            time: `1:24`,
            path: './assets/music/iwontletyoufeelaloneagain.m4a',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 12,
            name: 'Tonight',
            singer: 'demxntia',
            time: `1:24`,
            path: './assets/music/tonight.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 13,
            name: 'Bubbly',
            singer: 'Ethan Low',
            time: `1:24`,
            path: './assets/music/BUBBLY.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 14,
            name: 'Not Around',
            singer: 'Nova',
            time: `1:24`,
            path: './assets/music/NotAround.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 15,
            name: `We don't talk any more`,
            singer: 'Charlie Puth feat. Selena Gomez',
            time: `1:24`,
            path: './assets/music/wedonttalkanymore.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 16,
            name: `Seven`,
            singer: 'Jung Kook',
            time: `1:24`,
            path: './assets/music/seven.mp3',
            image: './assets/img/sontung.jpg',
            lyric: 
            ``
        },
        {
            count: 17,
            name: 'Của riêng mình em đó được không',
            singer: 'okenoc',
            time: `4:20`,
            path: './assets/music/cuariengminhemdoduockhong.wav',
            image: './assets/img/Nhat Minh.jpg',
            lyric: `remix by okenoc`
        },
        {
            count: 18,
            name: 'Vì là quá suy ',
            singer: 'okenoc',
            time: `4:20`,
            path: './assets/music/vilaquasuy.mp3',
            image: './assets/img/Nhat Minh.jpg',
            lyric: ``
        },
        {
            count: 19,
            name: 'Vì là quá suy - Mix',
            singer: 'okenoc',
            time: `4:20`,
            path: './assets/music/vlqsMix.wav',
            image: './assets/img/Nhat Minh.jpg',
            lyric: `remix by okenoc`
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
            app.isPlay = !app.isPlay
            playBtn.classList.add('dsNone')
            pauseBtn.classList.add('dsOpen')
            avatarAnimate.play()
            
        }
        //khi song pause 
        audio.onpause = function(){
            app.isPlay = !app.isPlay
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
            audio.play()          
        }
        // xử lý khi click pause
        pauseBtn.onclick = function() {
            audio.pause()
        }
        // Xử lý khi ấn space
        document.addEventListener ('keydown',function (e){ 
            if(e.which === 32 && !app.isInputSearchFocus && app.isPlay) {
                app.isPlay = !app.isPlay
                app.isInputSearchFocus = !app.isInputSearchFocus
                pauseBtn.click()
            }
            // if(e.which === 32) {
            //     playBtn.click()
            // }
        } ) 
        // Xử lý khi click vào input 
        searchInput.onfocus = function() {
            app.isInputSearchFocus = !app.isInputSearchFocus
            clearInput.classList.add('dsOpen')
        }
        clearInput.onclick = function() {
            searchInput.value = ''
            clearInput.classList.remove('dsOpen')
        }
        // Xử lý tìm kiếm bài hát trong searchInput
        searchInput.onkeyup = function(e){
            // Tìm kiếm bài nhạc hoặc ca sĩ 
            var valueInput = e.target.value
            const findSong = app.songs.filter(function(song){
                return song.name === valueInput || song.singer === valueInput
            })
            // Render bài nhạc hoặc ca sĩ đã tìm kiếm được
            const htmlFindsongs = []
            for(i = 0; i < app.songs.length; i++){
                if(findSong.length === 1 && app.songs[i].name === valueInput) {
                    const htmls = `<li class="song__search-item" data-index="${i}">${app.songs[i].name}</li>`
                    songSearch.innerHTML = htmls
                }
                if(findSong.length === 1 && app.songs[i].singer === valueInput) {
                    const htmls = `<li class="song__search-item" data-index="${i}">${app.songs[i].singer}</li>`
                    songSearch.innerHTML = htmls
                }

                if(findSong.length > 1) {                 
                    findSong.forEach((song, index) => {                       
                        if(app.songs[i].name === song.name) {                           
                            htmlFindsongs.push(`<li class="song__search-item" data-index="${i}">${app.songs[i].name}</li>`)
                        }                        
                    })                     
                    songSearch.innerHTML = htmlFindsongs.join('')
                }   
            }
            // Xử lý khi click vào bài hát vừa được tìm kiếm
            songSearch.onclick = function(e) {
                app.currentIndex = e.target.closest('.song__search-item').dataset.index
                app.loadCurrentSong()
                audio.play()
                
                // Lưu lịch sử tìm kiếm
                if(findSong.length == 1){
                    historySearch.innerHTML = `<li class="history__search-item" data-index = "${app.currentIndex}">${findSong[0].name}</li>`
                }
            }
            // Xử lý khi click vào bài hát trong phần lịch sử tìm kiếm
            historySearch.onclick = function(e) {
                app.currentIndex = e.target.closest('.history__search-item').dataset.index
                app.loadCurrentSong()
                audio.play()
            }
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
            app.isActiveRandom = !app.isActiveRandom
            randomBtn.classList.toggle('active', app.isRandom)
            app.setConfig('isRandom', app.isRandom)
            app.setConfig('isActiveRandom', app.isActiveRandom)
        }
        // Xử lý khi click repeat
        repeatBtn.onclick = function() {
            app.isRepeat = !app.isRepeat
            app.isActiveRepeat = !app.isActiveRepeat
            repeatBtn.classList.toggle('active', app.isRepeat)
            app.setConfig('isRepeat', app.isRepeat)
            app.setConfig('isActiveRepeat', app.isActiveRepeat)
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
        rangeVolumeMusic.onchange  = function() {
            audio.volume = rangeVolumeMusic.value / 100 
            app.setConfig('volumeMusic', audio.volume )
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
        musicLyric.innerText = this.currentSong.lyric
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

        this.isActiveRandom = this.config.isActiveRandom
        if(this.isActiveRandom){randomBtn.classList.add('active')}
        this.isActiveRepeat = this.config.isActiveRepeat
        if(this.isActiveRepeat){repeatBtn.classList.add('active')}

        // Lưu tiến độ bài hát
        
        rangeMusic.value = this.config.rangeMusic
        audio.currentTime = this.config.currentTime


        // Lưu âm lượng bài hát
        rangeVolumeMusic.value = this.config.rangeVolumeMusic
        audio.volume = this.config.volumeMusic
        
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

        // Render playlist
        this.render()
        
        //Tải cấu hình từ config vào ứng dụng
        this.loadConfig()

        
        
    }
} 

app.start()
