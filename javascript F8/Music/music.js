/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pouse / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click 
 */

const $ = document.querySelector(document)
const $$ = document.querySelectorAll(document)

const app = {
    songs: [

        {
            name : 'Hồ Việt Trung',
            singer: 'K-391',
            path:'./assets.music/music1.mp3',
            image:'./assets/img/image1.jpg'
        },
        {
            name : 'Trịnh thăng bình',
            singer: 'K-391',
            path:'./assets.music/music2.mp3',
            image:'./assets/img/image2.jpg'
        },
        {
            name : 'Hồ Quang Hiếu',
            singer: 'K-391',
            path:'./assets.music/music3.mp3',
            image:'./assets/img/image3.jpg'
        },
        {
            name : 'Phan Đình Tùng',
            singer: 'K-391',
            path:'./assets.music/music4.mp3',
            image:'./assets/img/image4.jpg'
        },
        {
            name : 'Trịnh Đình Quang',
            singer: 'K-391',
            path:'./assets.music/music5.mp3',
            image:'./assets/img/image5.jpg'
        },
        {
            name : 'Lê Bảo Bình',
            singer: 'K-391',
            path:'./assets.music/music6.mp3',
            image:'./assets/img/image6.jpg'
        },
        {
            name : 'Yan Nguyễn',
            singer: 'K-391',
            path:'./assets.music/music7.mp3',
            image:'./assets/img/image7.jpg'
        },
        {
            name : 'Vương Anh Tú',
            singer: 'K-391',
            path:'./assets.music/music8.mp3',
            image:'./assets/img/image8.jpg'
        }
        
    
    ],
}

