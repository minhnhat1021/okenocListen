const playlist = document.querySelector('.playlistJs')
const modalPlaylist = document.querySelector('.modal_playlist')
const playlistContainer = document.querySelector('.playlist_container')

console.log(playlistContainer)
playlist.onclick = function(){
    modalPlaylist.classList.add('dsFlex')
}
modalPlaylist.onclick = function(){
    modalPlaylist.classList.remove('dsFlex')
}
playlistContainer.onclick = function(e){
    e.stopPropagation()
}