const songs = [
    {
        name: "Sarı Gelin",
        info: "«Sarı Gelin» — известная народная песня о любви и разлуке."
    },
    {
        name: "Ay Laçın",
        info: "«Ay Laçın» — национальная песня, связанная с регионом Карабах."
    },
    {
        name: "Azerbaycan",
        info: "«Azerbaycan» — патриотическая песня о Родине."
    },
    {
        name: "Şuşanın Dağları",
        info: "«Şuşanın Dağları» — песня, посвящённая городу Шуша."
    },
    {
        name: "Nazende Sevgilim",
        info: "«Nazende Sevgilim» — романтическая народная песня."
    }
];

const songList = document.getElementById("songList");
const songInfo = document.getElementById("songInfo");

songs.forEach(song => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = song.name;

    button.addEventListener("click", () => {
        songInfo.textContent = song.info;
    });

    li.appendChild(button);
    songList.appendChild(li);
});