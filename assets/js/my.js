//data-filter function

//ini variabel untuk fungsi pemilihan query
const wrapFilter = document.querySelector(".pr-filter"),
    btnFilter = wrapFilter.children,
    btnCount = btnFilter.length,
    prItem = document.querySelectorAll(".pr-item"),
    projectCount = prItem.length;

//ini fungsi untuk loop
for (let i = 0; i < btnCount; i++) {
    btnFilter[i].addEventListener("click", function () {
        wrapFilter.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterCount = this.getAttribute("data-filter");
        for (let j = 0; j < projectCount; j++) {
            if (filterCount === prItem[j].getAttribute("data-category")) {
                prItem[j].classList.remove("hide");
                prItem[j].classList.add("show");
            } else {
                prItem[j].classList.remove("show");
                prItem[j].classList.add("hide");
            } if (filterCount === "all") {
                prItem[j].classList.remove("hide");
                prItem[j].classList.add("show");
            }
        }
    })
}

//zoom-box function
const zoomBox = document.querySelector(".zoom-box"),
    zoomboxIMG = zoomBox.querySelector(".zm-img"),
    zoomboxExit = zoomBox.querySelector(".zm-exit"),
    //zoomboxVideo = zoomBox.querySelector("zm-video"),
    zoomboxTXT = zoomBox.querySelector(".zm-text"),
    zoomboxCount = zoomBox.querySelector(".zm-num");

let itemFirst = 0;

for (let i = 0; i < projectCount; i++) {
    prItem[i].addEventListener("click", function () {
        itemFirst = i;
        changeItem();
        showZoom();
    })
}

//fungsi untuk zoom
function showZoom() {
    zoomBox.classList.toggle("opened");
}

//fungsi untuk ganti item
function changeItem() {
    imgSource = prItem[itemFirst].querySelector(".pr-img img").getAttribute("src");
    zoomboxIMG.src = imgSource;
    zoomboxTXT.innerHTML = prItem[itemFirst].querySelector("h4").innerHTML
    zoomboxCount.innerHTML = (itemFirst + 1) + " of " + projectCount;
}

function nextItem() {
    if (itemFirst === projectCount - 1) {
        itemFirst = 0
    } else {
        itemFirst++
    } changeItem();

}

function prevItem() {
    if (itemFirst === 0) {
        itemFirst = projectCount - 1;
    } else {
        itemFirst--
    } changeItem();

}

//exit

zoomBox.addEventListener("click", function (event) {
    if (event.target === zoomboxExit || event.target === zoomBox) {
        showZoom();
    }
})