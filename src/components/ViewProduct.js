import React from "react";
import { useParams } from "react-router-dom";

function ViewProduct() {
  let { productId } = useParams();

  const productData = [
    {
      id: 1,
      image: "https://static.toiimg.com/img/78637928/Master.jpg",
      title: "Apple iMac",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
      title: "Apple MacBook Pro 12",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
      id: 3,
      image:
        "https://techunwrapped.com/wp-content/uploads/2022/02/The-design-of-the-iPhone-14-in-images-and-7.jpeg",
      title: "Apple iPhone 12 Pro",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbNz_bv5Jd9h46NJU4m053uBepAJkdtCST-EchygCkM5ZTzZPZOHEqdr36bH0pvgJFq8&usqp=CAU",
      title: "Apple iPad Air",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 5,
      image: "https://i.redd.it/39r7h8smmof61.jpg",
      title: "Apple Watch",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 6,
      image:
        "https://images.squarespace-cdn.com/content/v1/5aef2fad9d5abb57b704f0e2/1608260781895-S8ENVI3SXAGTHJ3HTI9D/Airpods+Max.png?format=750w",
      title: "Apple AirPods Max",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
      id: 7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632861342000",
      title: "Apple AirPods",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 8,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000",
      title: "Apple TV+",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <>
      <h1>Product Details</h1>
      <div className="mt-4">
        <h2 className="text-dark">{productData[productId - 1].title}</h2>
      </div>

      <div className="mt-4">
        <img src={productData[productId - 1].image} alt />
      </div>
      <div>
        <h5 className="text-dark mt-3">{productData[productId - 1].content}</h5>
      </div>
    </>
  );
}

export default ViewProduct;