const projects = [
  {
    name: "Epay-ku",
    description: "Membuat aplikasi Epay-ku untuk pencatatan penjualan toko kelontong menggunakan Java Menangani informasi dan dokumen yang dihasilkan dari pengembangan aplikasi dan menjaganya tetap terorganisir dengan baik. ",
  },
  {
    name: "Website Klinik Usada",
    description: "Membuat website Klinik Usada menggunakan PHP dengan framework Laravel untuk pengelolaan data pasien. website Klinik Usada untuk memudahkan admin dalam mengelola data pasien, menggunakan bahasa pemrograman PHP dan menggunakan kerangka kerja Laravel. Menangani informasi dan dokumen yang dihasilkan dari pengembangan aplikasi dan menjaganya tetap terorganisir dengan baik.",
  },
  {
    name: "Budidaya Jamur IoT",
    description: "Merancang sistem budidaya jamur tiram berbasis IoT dengan pemrosesan gambar menggunakan Python.",
  },

];

const projectContainer = document.getElementById("project-container");

projects.forEach((project) => {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList.add("testimonial");
  testimonialDiv.innerHTML = `
    <h3>${project.name}</h3>
    <div class="rating">${"⭐".repeat(project.rating)}</div>
    <p>${project.description}</p>
  `;
  projectContainer.appendChild(testimonialDiv);
});

let currentIndex = 0;
const totalItems = projects.length;

function autoSlide() {
  const items = document.querySelectorAll(".testimonial");
  items.forEach((item, index) => {
    const offset = (index - currentIndex) * 100;
    item.style.transform = `translateX(${offset}%)`;
  });

  const progressBar = document.querySelector(".slider-progress span");
  const progress = ((currentIndex + 1) / totalItems) * 100;
  progressBar.style.width = `${progress}%`;

  currentIndex = (currentIndex + 1) % totalItems;
}

const progressDiv = document.createElement("div");
progressDiv.classList.add("slider-progress");
progressDiv.innerHTML = `<span></span>`;
projectContainer.parentElement.appendChild(progressDiv);

setInterval(autoSlide, 3000);

autoSlide();
