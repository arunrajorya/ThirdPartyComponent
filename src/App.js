// import logo from './logo.svg';
import './App.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';

function App() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch(err => console.log(err));
  }, [])
  // console.log(Products[0].title)
  return (
    <div className=''>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          {Products.map((data, i) => (
            <div className='col-3' key={i}>
              <div className="card p-2 h-75">
                <img src={data.image} className="card-img-top h-50" alt={data.title} />
                <div className="card-body">
                  <h5 className="card-title h-75">{data.title}</h5>
                  <a href="#!" className="btn btn-primary">Buy {data.price}$</a>
                </div>
              </div>
            </div>


          ))}
        </div>

      </div>

    </div>
  );
}

export default App;
