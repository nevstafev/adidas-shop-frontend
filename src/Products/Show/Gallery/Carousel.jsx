import React, { useState } from 'react';
import styled from 'styled-components';

import Cover from './Cover';
import Thumbnails from './Thumbnails';
import Button from './Thumbnails/Button';
import Image from '../../../components/Image';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 0 0 100%;
`;

const ThumbImage = styled(Image)`
  max-height: 100px;
`;

const Carousel = ({ images }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Wrapper>
      <Cover image={images[selected]} />
      <Thumbnails>
        {images.map((img, index) => (
          <Button
            key={img}
            isSelected={index === selected}
            onClick={() => setSelected(index)}
          >
            <ThumbImage src={img} />
          </Button>
        ))}
      </Thumbnails>
    </Wrapper>
  );
};

export default Carousel;
