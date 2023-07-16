import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImageStyled } from './ImageGalleryItemStyled';

function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) {
  return (
    <ImageGalleryItemStyled key={id}>
      <ImageStyled
        src={webformatURL}
        alt={tags}
        onClick={() => { onOpenModal({id, tags, largeImageURL})
        }}
      />
    </ImageGalleryItemStyled>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
