const carousels = [
    {
      id: 1,
      title: "stemxtech",
      images: '../../assets/stemxtech/stem1.jpg'
    },
    {
      id: 2,
      title: "stemxtech",
      images: '../../assets/stemxtech/stem2.jpg'
    },
    {
      id: 3,
      title: "stemxtech",
      images: '../../assets/stemxtech/stem3.jpg'
    },
    {
      id: 4,
      title: "stemxtech",
      images: '../../assets/stemxtech/stem4.jpg'
    },
    {
      id: 5,
      title: "stemxtech",
      images: '../../assets/stemxtech/stem5.jpg'
    },
    {
      id: 6,
      title: "stemxtech",
      images: '../../assets/stemxtech/stem6.jpg'
    },
    {
      id: 7,
      title: "stemxtech",
      images: '../../assets/stemxtech/stem7.jpg'
    },
    {
      id: 8,
      title: "stemxtech",
      images: '../../assets/stemxtech/stem8.jpg'
    },
    {
      id: 9,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech1.jpg'
    },
    {
      id: 10,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech2.jpg'
    },
    {
      id: 11,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech3.jpg'
    },
    {
      id: 12,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech4.jpg'
    },
    {
      id: 13,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech5.jpg'
    },
    {
      id: 14,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech6.jpg'
    },
    {
      id: 15,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech7.jpg'
    },
    {
      id: 16,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech8.jpg'
    },
    {
      id: 17,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech9.jpg'
    },
    {
      id: 18,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech10.jpg'
    },
    {
      id: 19,
      title: "stemxtech",
      images: '../../assets/stemxtech/tech11.jpg'
    },
  ];
  
  let customerCarousel = document.getElementById("customerCarousel");
  let innerCarousel = document.createElement("div");
  innerCarousel.className = "carousel-inner";

  carousels.forEach((item) => {
    let carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";

    let img = document.createElement("img");
    img.src = item.images;
    img.className = "stemimg";

    carouselItem.appendChild(img);
    innerCarousel.appendChild(carouselItem);
  });

  customerCarousel.appendChild(innerCarousel);

  // set first item as active
  document.querySelector(".carousel-item").classList.add("active");
  