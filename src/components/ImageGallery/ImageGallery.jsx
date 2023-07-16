import PropTypes from 'prop-types';
import { ImgeGalleryStyledUl } from './ImageGalleryStyled';
import ImageGalleryItem from 'components/ImageGalleryItem /ImageGalleryItem';

function ImageGallery({ responcedPhotos, onOpenModal }) {
  return (
    <ImgeGalleryStyledUl>
      {responcedPhotos.map(({ id, webformatURL, largetImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            tags={tags}
            webformatURL={webformatURL}
            largetImageURL={largetImageURL}
            onOpenModal={onOpenModal}
          />
        );
      })}
    </ImgeGalleryStyledUl>
  );
}

ImageGallery.propTypes = {
  responcedPhotos: PropTypes.array,
  onOpenModal: PropTypes.func,
};
export default ImageGallery;
