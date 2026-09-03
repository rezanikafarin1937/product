import styles from "./galleryImage.module.scss"

const GalleryImage = ({ images }) => {
  return (
    <div className={styles.images}>
      {images.map((image, index) => (
        <div key={index} className={styles.imagesImage}>
          <img
            src={`${process.env.REACT_APP_API_URL}/${image}`}
            alt="خرید عینک"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryImage;
