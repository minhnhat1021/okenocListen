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
            name: 'Vì là quá suy',
            singer: 'okenoc',
            time: `4:08`,
            path: './assets/music/vilaquasuy.mp3',
            image: './assets/img/Nhat Minh.jpg',
            lyric: `Có lẽ nào đôi bàn tay đang cần nắm
            Cơn mưa buông màn đêm che dấu đi kỷ niệm
            Đốt hết bao ngồi một góc trông ngầu lắm
            Sương vương mi , hình bóng ai lướt qua trong anh
            
            Âm thanh vang bên tai cứ nhắc mãi nhắc , dù gặp chuyện gì
            Mang tâm tư ra đây luyên thuyên vì ai đôi môi nỗi đau ghì chặt
            Cho nước mắt tuôn rơi cứ rơi vơi đi , buồn phiền làm gì
            Yêu thương kia chơi vơi nơi đâu xa xôi không gian mãi không trở về
            Vì là quá suy , con tim anh bây giờ đã suy
            Tay thì muốn buông xuôi , bàn chân lại muốn ngồi gần
            Vì là quá suy , con tim anh bây giờ đã suy
            
            Giấu hết những vần thơ ,anh trao tặng cho em
            Khi mùa đông đã sang 2 tháng vu vơ nỗi nhớ không nguôi ngoai
            Giấu kín những lời ca , lạc trong đôi mắt 
            Nụ cười của ngày xưa uh no yeh uh no yeh yeh 
            Cuốn gói những thờ ơ , theo muôn ngàn cơn đau
            Mây mù giăng đường khuya ai đón ngu ngơ đã khiến anh đi lạc
            Muốn phút vững bình yên , lục trong tâm trí
            Đoạn hồi kết mình anh uh no yeh uh no yeh yeh
                
            Suy , vì là quá suy (suy vì gì)
            Vì đâu mà quá suy (suy vì sao ?)
            Suy , vì em chứ ai (suy vì gì)
            Giờ đây anh đã suy (uh no uh no)`
        },
        {
            count: 3,
            name: 'Của riêng mình em đó được không',
            singer: 'okenoc',
            time: `2:38`,
            path: './assets/music/cuariengminhemdoduockhong.wav',
            image: './assets/img/Nhat Minh.jpg',
            lyric: 
            `Muốn kiếm cớ lại gần , bên em thật nhiều chàng trai tương tư từng ngày 
            Anh không thể giấu hết những ngại ngùng , khi em ngồi kế bên , liếc nhìn đắm say
            Đôi ta dường như biết trước điều gì , lân la vài câu quay sang thầm thì
            Hợp vibes thì đố ai ngăn chúng ta về nhà anh
            
            Thoáng bỡ ngỡ đỡ hiểu lầm , tình yêu anh không biết đâu em
            Nhưng như anh đã lạc vào trong ngàn muôn lối dấu hương của em                
            Thoáng ngu ngơ lỡ liều ngầm , hình vương cơn mơ phút u mê heh heh 
            Khi em đưa đôi tay ra nhanh nhưng không quan tâm ai đang yêu em
            thì suy uh hoh uh hoh 
            
            Mình cùng bước về phía nhau , nhẹ ngân khúc ca này 
            Lạc vào trong mắt , nhẹ lướt bình minh đến hoàng hôn
            Dự vị tối qua , làm anh ngỡ như là
            Mình thuộc về em , của riêng mình em đó được không
            
            Anh biết hai đưa mình đều không muốn yêu xa
            Lại gần anh em lúc này lại chẳng còn kiêu ha
            Trên đôi môi em là vị ngọt chery
            Đêm buông nhưng không thể nào mà che đi
            Sắc đẹp ,trên gương, mặt em, hồn nhiên mơ , màng ghì 
            Chắc vào ,hương mê, dịu tan, hòa không gian tình `
        },
        {
            count: 4,
            name: 'Fallinlove',
            singer: 'okenoc',
            time: `3:24`,
            path: './assets/music/fallinlove.mp3',
            image: './assets/img/Nhat Minh.jpg',
            lyric: 
            `Tựa nhẹ làn khói ngọt ngào cuốn hết chìm vào bủa vây ánh trăng đêm
            Mờ làn mây gió , dẫn lối ùa về màn đêm tối
            Đậm vị ngọt hương ấm gọi mời , chẳng thể lời nào giờ đây có phải chăng em ?!
            Ngàn bối rối thoáng chốc ngại ngùng cứ tăng thêm
            Phải làm sao khi cơn mưa buông , anh ngay kế bên em chung một ô
            Ngàn suy tư trong anh không phanh , giờ như nào , giờ thế nào
            
            Chẳng thể đứng im, cũng chẳng thế ngó lơ
            Không gian chìm vào, thanh âm hòa nhịp
            
            Fall in love bật spotify
            Fall in love mình cùng đón ban mai
            Em bước quay cuồng quay cuồng chờ anh đỡ
            Tay đưa theo , hương êm ru lạc vào cơn mơ
            
            Vốn ít love , nên giờ có hơi ngơ
            Ngốn ít hớp , trà đào bánh kem bơ
            Giây phút xoay vòng xoay vòng từng câu nói
            Đôi tâm giao , chung tương tư bồi hồi mong ước 
            
            Fall in love , em cho anh tan trong , cơn mơ cơn giấc mơ
            Chìm đắm những say đắm say, tay nắm tay
            Girl my girl, you make me feel like 
            
            Damn em trong không gian đấy
            Cho tôi quên đi nhung nhớ
            Em giờ đây, tựa chiêm bao những đóa hoa
            
            Fall in love , em cho anh thêm mơ bơ,
            Như thế đấy , không mơ không sao em nói hết 
            Tương tư , trao cho anh k hối tiếc 
            Chìm đắm vào những khúc hát
            
            Màu mắt trong em đã đổi thay
            Tình vương có nghe
            Bước tiếp nối câu yêu thương , muôn ngàn mây`
        },
        {
            count: 5,
            name: 'Đưa em đi chơi thâu đêm',
            singer: 'okenoc',
            time: `1:08`,
            path: './assets/music/duaemdichoithaudem.mp3',
            image: './assets/img/Nhat Minh.jpg',
            lyric:
            `Tỉnh dậy và thấy những tin nhắn tối qua chưa xem
            Voice gửi em đính icon vào
            Đồng hồ điểm giấc , phút chốc nhớ ra hôm nay
            Anh và em vẫn chưa , chill thước phim mình hẹn

            Cô bé à qua em có ngủ ngon không
            Sorry anh ngủ quên em có giận anh không
            Cũng vì dạo gần đây hay thức cả đêm thông 
            Thiếu hơi thở của em anh hay tỉnh giấc ngay giữa màn đêm đông

            Mùa đông này anh ôm em là tuyệt nhất
            Lắng nghe giọng em nhẹ ru chìm sâu vào trong những giấc mơ đẹp
            Không ngừng nghĩ về em 
            Let's go lại nhà em bé rung chuông cửa 2 lần và cười

            Giờ thì anh lang thang vi vu trên con phố 
            Đưa em đi chơi thâu đêm để giải ngố 
            Sau chuỗi ngày làm việc miệt mài hơi ngoan cố
            Baby girl cùng chill vào giai điệu này yeah
            Vứt hết mọi buồn phiền thường ngày cầm tay của anh mình dạo bước 
            Tính ra là chúng ra , xa nhau cũng đã được khá lâu 
            Chỉ muốn cạnh bên em từng phút một 
            Cảm nhận tình yêu này thật khác bọt
            Chìm đắm vào 
            
            Có lẽ đôi ta trao ngàn yêu thương
            Bông hoa tuyết rơi cứ cho em đi đâu xa làm ngất ngây
            Có lẽ đôi ta trao ngàn yêu thương
            Tìm dần vào trong những ký ức xưa cũ xưa đã úa mòn 
            `
        },
        {
            count: 6,
            name: 'Coo tar',
            singer: 'okenoc',
            time: `1:24`,
            path: './assets/music/cootar.wav',
            image: './assets/img/Nhat Minh.jpg',
            lyric: 
            `Có vẻ là như cô tar đang dân chết
            Cứ ra dáng một hồi lại thôi vô tư suy tư buông nơi cảm xúc
            Khóe mi lệ hoen tuôn rơi k hồi kết
            Nhắm chặt mắt tay buông thật nhanh tranh đua k lâu với hơi thở nấc
            Oh baby em có biết âm thanh ngân vang ở bên tai
            Làm anh nhớ đến bức tranh 1 cô gái đang vấn vương ai
            Thì ra đó chính là lý do em lại rất thích lofi

            Cô đơn lạc lõng trông mong về đâu
            Cứ như thế đến sáng sớm mai
            Mưa lại rơi ướt đẫm sân nhà
            Cứ như thế đến sáng sớm mai
            Bao trùm em giá buốt âm thầm

            Tình yêu trong em giờ là trang giấy trắng
            Được tô lên thêm một màu đen trống vắng
            Phải làm sao để quên đi ngày giông thiếu nắng
            
            Cho bao nhiêu năm tháng anh chẳng lấy lấy 
            Tình giờ là cơn gió theo làn mây đen
            Anh tưởng là giọt sầu sẽ nhanh trôi
            Anh tưởng là giọt sầu sẽ nhanh trôi
            Nhưng em đâu còn là cô bé đó 
            Cơn mưa đưa em nhẹ nhàng lặng hoen mi trên đôi vai gầy
            Em muốn dừng rồi nhưng niềm đau đã qua à
            Nên anh đành phải , 
            Chìm dần trong bóng đêm 
            Chìm dần trong bóng đêm
            
            One two listen , one two listen ay, okenoc Listen
            Em đã quen và k thể thiếu với những chất kích thích 
            Hay là những rick kid bao quanh
            Cố nắm lấy ký ức quá mức đấy nhé em sẽ nhanh trôi đi thôi cơn mơ cô gắng nét sắc quá mức hao nhanh
            Chơi vơi nét sắc hao nhanh`
        },
        {
            count: 7,
            name: 'Vì là quá suy - Mix',
            singer: 'okenoc',
            time: `4:20`,
            path: './assets/music/vlqsMix.wav',
            image: './assets/img/Nhat Minh.jpg',
            lyric: `remix by okenoc`
        },
        {
            count: 7,
            name: 'Vẫn vậy',
            singer: 'okenoc',
            time: `1:01`,
            path: './assets/music/cigar.mp3',
            image: './assets/img/Nhat Minh.jpg',
            lyric:
            `Thức dậy , check direct tin nhắn hôm qua người quên mà 
            Vẫn vậy , những câu nói du dương bên tai như vẫn đang 
            Ở đây , ngọt ngào từ chất giọng
            Khiến anh luôn ngóng chông từng giờ đồng hồ trôi qua mà không phôi pha
            Giờ em đâu ha hey , baby à
            Em như là , giọt sương long lanh mong manh
            Chỉ được ngắm , mà không thể chạm
            Tồn tại ngắn , vấn vương trong anh
            Tựa tia nắng , chiếu qua chiều buồn hey
            Khi đêm về bủa vây tâm tư nơi anh 
            Không biết yêu thương mông lung kia đang trôi
            Viết từng đoạn kỷ niệm bồi hồi để rồi cùng màn đêm thâu
            Và anh chẳng biết yêu em là sai không , từng câu nói cứ rót vào tai , 
            Cuốn anh vào , những nhung nhớ
            Anh chẳng biết yêu thương giờ đâu , mây trời đem em đi về đâu 
            Bóng dáng ai kia làm anh , bám lấy theo bao nỗi sầu , 
            Và trong bóng tối con đường anh đi 
            Màn đêm dẫn lối sang đường nhanh khi 
            `
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
