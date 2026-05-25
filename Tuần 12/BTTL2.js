let reviews = [
    {
        id: 1,
        name: "Trong Nghia",
        job: "Web Developer",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Tuyệt vời, đánh giá 5*."
    },
    {
        id: 2,
        name: "Ái Thư",
        job: "HLV Dinh Dưỡng",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Sản phẩm dinh dưỡng này rất tuyệt vời."
    },
    {
        id: 3,
        name: "Thanh Dung",
        job: "Marketer",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Tôi thích sản phẩm này, thường sử dụng cho cả gia đình."
    },
    {
        id: 4,
        name: "Trần Huỳnh",
        job: "Giám Đốc",
        img: "https://randomuser.me/api/portraits/men/46.jpg",
        text: "Cực kỳ yêu thích !!!"
    }
];

let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let randomBtn = document.getElementById("random-btn");
let currentItem = 0;

document.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});


function showPerson(personIndex) {
    const item = reviews[personIndex];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    
    while (randomIndex === currentItem) {
        randomIndex = Math.floor(Math.random() * reviews.length);
    }
    
    currentItem = randomIndex;
    showPerson(currentItem);
});