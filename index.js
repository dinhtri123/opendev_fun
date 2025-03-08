document.addEventListener("DOMContentLoaded", function () {
  const playVideo = Array.from(document.querySelectorAll(".play-video"));
  const video = document.querySelector(".video");
  playVideo.map((item, i, arr) => {
    item.addEventListener("click", function () {
      arr.forEach((itemChild) => {
        itemChild.style.display = "none";
      });
      video.classList.add("active");
      video.innerHTML = `<iframe width="1217" height="685" src="https://www.youtube.com/embed/c3nlQlLo0lA"
            title="Đua xe thăng bằng gay cấn tại Nhật phần 2" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    });
  });
  const tabs = Array.from(document.querySelectorAll(".our-tab"));
  tabs.map((item, i, arr) => {
    item.addEventListener("click", function () {
      arr.forEach((itemChild) => {
        itemChild.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
  const btnToTop = document.querySelector(".scroll-top");
  btnToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
});
