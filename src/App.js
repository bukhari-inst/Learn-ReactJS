import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="Yes" name="Youdora Dora" Category="LEBARAN" />
      <ReviewItems />
    </div>
  );
}

//Nma variabel fungsi hruf dpn hrus kapital
function FotoProduk() {
  return (
    <div className="Foto">
      <img src="bwasneaker.jpg" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount == 'Yes') {
    return <p>Diskon {discount}% off</p>;
  } else if (isDiscount == 'Coming') {
    return <p>Akan ada diskon ..</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

function ProdukInfo(props) {
  const { Category, name, isDiscount } = props;
  const benefits = [
    'Tidak Kusut Terkena Air',
    'Bahan Lebih Halus',
    'Tidak Gerah',
  ];
  const listBenefits = benefits.map((itemBenefits) => (
    <li key={itemBenefits}>{itemBenefits}</li>
  ));
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{Category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.309.399</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          One of the most rekognizable shoes in the AJ collection, the Air
          Jordan 3 Retro features lightweight, visible cushioning just like the
          original from '88. Signature details and materials celebrate the
          game-changing icon.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCard(name, e)} href="#">
          Add to Card
        </a>
      </div>
    </div>
  );
}

function TambahCard(e) {
  return console.log('Membeli Produk ...' + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired,
};

export default App;

// function App() {
//   // const userLogged = 'inst';
//   // const userLoggedJSX = <strong>inst for future!</strong>;
//   // let a = 1;
//   // let b = 2;

//   return (
//     <div>

//     // harus dibungkus dengan div sebagai parrent/orng tua
//     // <div>
//     //   <h1>Belajar reactJS</h1>
//     //   <p>Meingkantkan keahlian coding dan design</p>
//     //   <h1>Belajar reactJS</h1>
//     //   <p>Meingkantkan keahlian coding dan design</p>
//     //   <h1>Belajar reactJS</h1>
//     //   <p>Meingkantkan keahlian coding dan design</p>
//     //   {userLogged}
//     //   {userLoggedJSX}
//     //   <br />
//     //   {a + b / 200}
//     // </div>
//   );
// }

// export default App;
