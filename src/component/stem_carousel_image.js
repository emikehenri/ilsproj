const carousels = [
    {
      id: 1,
      title: "stemxtech",
      images: [
        "../../assets/stemxtech/stem1.jpg",
        "../../assets/stemxtech/stem2.jpg",
        "../../assets/stemxtech/stem4.jpg",
        "../../assets/stemxtech/stem5.jpg",
        "../../assets/stemxtech/stem6.jpg",
        "../../assets/stemxtech/stem7.jpg",
        "../../assets/stemxtech/stem8.jpg",
        "../../assets/stemxtech/tech/tech1.jpg",
        "../../assets/stemxtech/tech/tech2.jpg",
        "../../assets/stemxtech/tech/tech3.jpg",
        "../../assets/stemxtech/tech/tech4.jpg",
        "../../assets/stemxtech/tech/tech5.jpg",
        "../../assets/stemxtech/tech/tech6.jpg",
        "../../assets/stemxtech/tech/tech7.jpg",
        "../../assets/stemxtech/tech/tech8.jpg",
        "../../assets/stemxtech/tech/tech9.jpg",
        "../../assets/stemxtech/tech/tech10.jpg",
        "../../assets/stemxtech/tech/tech11.jpg"
      ],
    },
  ];
  
  let customerCarousel = document.getElementById("customerCarousel");
  let innerCarousel = document.createElement("div");
  innerCarousel.className = "carousel-inner";
  
  carousels.forEach((item) => {
    item.images.forEach((imagePath, index) => {
      let carouselItem = document.createElement("div");
      carouselItem.className = "carousel-item";
  
      let img = document.createElement("img");
      img.src = imagePath;
      img.className = "stemimg";
  
      carouselItem.appendChild(img);
      innerCarousel.appendChild(carouselItem);
  
      // set first item as active only for the first carousel
      if (index === 0 && item.id === 1) {
        carouselItem.classList.add("active");
      }
    });
  });
  
  customerCarousel.appendChild(innerCarousel);
  