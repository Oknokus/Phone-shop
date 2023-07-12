import SimpleImageSlider from "react-simple-image-slider";

// import sliderImg1 from "../../assets/catalog/slider/slider1.jpg";
// import sliderImg2 from "../../assets/catalog/slider/slider2.jpg";
// import sliderImg3 from "../../assets/catalog/slider/slider3.jpg";

const images = [
    { url: "https://gas-kvas.com/uploads/posts/2023-02/1675431319_gas-kvas-com-p-fonovie-risunki-dlya-smartfona-9.jpg" },
    { url: "https://s1.1zoom.ru/big3/94/Retro_Telephone_479953.jpg"},
    { url: "https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-08ec7989-6c46-4f67-9bb3-bcf0dfe85427" }   
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={800}
        height={500}
        style={{backgroundSize:"center center"}}
        images={images}       
        showNavs={true}
      />
    </div>
    );
  }

export default Slider;