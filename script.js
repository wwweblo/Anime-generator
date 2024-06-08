document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        let isSFW = document.getElementById('sfw').checked;
        let isWaifu = document.getElementById('waifu').checked;
        getAnime(isSFW, isWaifu);
    });
});

function getAnime(isSFW, isWaifu) {
    let query = 'https://api.waifu.pics/';
    query += isSFW ? 'nsfw/' : 'sfw/';
    query += isWaifu ? 'waifu' : 'neko';

    fetch(query)
        .then(response => response.json())
        .then(data => {
            const animeImg = document.querySelector('.anime-img');
            const animeName = document.querySelector('.animename');

            animeImg.src = data.url;
        })
        .catch(error => {
            console.error('Error fetching anime picture:', error);
        });
}
