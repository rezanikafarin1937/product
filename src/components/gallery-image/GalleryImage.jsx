
import styles from "./galleryImage.module.scss";

const GalleryImage = ({ images }) => {
  return (
    <div className={styles.images}>
      {images.map((image, index) => (
        <div key={image || index} className={styles.imagesImage}>
          <img
            src={`${process.env.PUBLIC_URL}${image}`}
            alt={`تصویر ${index + 1} از محصول`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryImage;

