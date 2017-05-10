import React, {Component} from 'react';

import './css/fonts.css'
import './css/normalize.css'
import './css/flexboxgrid.css'
import './css/product.css'

import Sidebar from './sidebar/index';

import DarkFrontSide from './image/dark-front.png';
import DarkPair from './image/dark-pair.jpg';
import DarkPairBackSide from './image/dark-pair-back.jpg';
import DarkPairLeftSide from './image/dark-pair-left-side.png';
import ProductImage from './image/dark-big.png';

class ProductDetails extends Component {
  render() {

    return (<div className="product-main-container">
      <Sidebar/>
      <main className="main-content">
        <div className="product">
          <header className="header">
            <div className="header-left">
              <h1>Ultra<br/>Boost</h1>
              <button className="save-button">
                Save
              </button>
            </div>
            <div className="header-right">
              <div className="product-color-selector">
                <button className="product-color grey"/>
                <button className="product-color blue"/>
                <button className="product-color black"/>
                <button className="product-color light-grey"/>
                <span className="product-sale">sale</span>
              </div>
              <h2 className="product-price">$170</h2>
            </div>
          </header>
          <div className="product-info">
            <div className="product-image">
              <img src={ProductImage}/>
            </div>
            <div className="product-preview">
              <div className="product-preview-image"><img src={DarkFrontSide}/></div>
              <div className="product-preview-image"><img src={DarkPair}/></div>
              <div className="product-preview-image"><img src={DarkPairBackSide}/></div>
              <div className="product-preview-image product-preview-image-selected"><img
                src={DarkPairLeftSide}/></div>
              <div className="product-preview-separator">
                <div className="edge"/>
                <div className="edge"/>
                <div className="edge"/>
              </div>
              <p className="product-preview-more-photos">see <br/> more <br/> photos</p>
            </div>
          </div>
          <p className="product-description"><span className="company-name">Adidas</span> is a German multinational corporation,
            headquartered in
            Herzogenaurach, Germany, that designs and
            manufactures shoes, clothing and accessories.
          </p>
        </div>
        <div className="product-buy">
          <button>
            Buy now
          </button>
        </div>
      </main>
    </div>);

  }
}

export default ProductDetails;