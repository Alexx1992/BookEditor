import React from 'react';
import PropTypes from 'prop-types';
import './ImageLoader.css';

import LoadImageIcon from './img/photo.svg';

const ImageLoader = (props) => {
  const { inputAttrs, inputValue, onChange } = props;
  const fileLoaderRef = React.createRef();

  const loadImage = () => fileLoaderRef.current.click();
  const handleImageChange = (e) => {
    const reader = new FileReader();
    const [ file ] = e.target.files;

    if (file) {
      reader.onload = (event) => {
        const url = event.target.result;
        onChange(url);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="ImageLoader" onClick={loadImage} style={{backgroundImage: `url('${inputValue}')`}}>
      <input type="file" accept=".jpg, .jpeg, .png, .svg" {...inputAttrs} onChange={handleImageChange} ref={fileLoaderRef}/>
      {!inputValue && <div className="ImageWrapper">
        <img src={LoadImageIcon} alt="Загрузить обложку"/>
      </div>}
    </div>
  );
};

ImageLoader.propTypes = {
  onChange: PropTypes.func,
  inputAttrs: PropTypes.object
};

export default ImageLoader;