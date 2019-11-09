import React, {useState} from 'react';
import Modal from './Modal';

const Card = ({animal, isLoggedIn}) => {
  const [ show, handleShow ] = useState(false);
  const [ amount, handleAmount ] = useState(0);
  const showModal = () => {
    handleShow(true);
  }
  const hideModal = () => {
    handleAmount(amount);
    handleShow(false);
  }
  const handleSubmit = e => {
    e.preventDefault();
    handleAmount(e.target.value);
  }
  const disableBtn = !isLoggedIn ? { disabled: true }: {};
  return (
    <div className='card-container'>
      <header className='header'>
        <h2>{animal.name} -- #{animal.id}</h2>
        <p>Partilhar</p>
      </header>
      <img src={animal.img} alt='kitten' />
      <section className='content-card'>
        <div className='clearfix'>
          <h4>Perdilo</h4> 
          <p>{animal.dataPerdido.month}-{animal.dataPerdido.day}-{animal.dataPerdido.year}</p>
        </div>
        <div className='clearfix'><h4>Dono</h4> <p>{animal.owner}</p></div>
        <div className='clearfix'><h4>Localidade</h4> <p>{animal.locality}</p></div>
      </section>
      <section className='card-price'>
        <div className='clearfix'>
          <h4><span>${amount}</span> doados</h4>
          <Modal show={show}>
            <form className='clearfix' onSubmit={handleSubmit}>
              <div className='clearfix mt-10 mb-10'>
                <label htmlFor='donate'>Amount: </label>
                <input 
                  className='input-form'
                  type='number'
                  name='donate'
                  value={amount || ''}
                  min='1' 
                  max='10'
                  onChange={handleSubmit}
                /> 
                <button type='button' onClick={hideModal} className='donateBtn'>Donate</button>
              </div>
            </form>
          </Modal>
          <button 
          {...disableBtn} 
          className={`btn-active ${!isLoggedIn ? 'btn-disable' : ''}`}
          onClick={showModal} type='button'>Doar</button>
        </div>
      </section>
      <footer className='footer'>
        <a className='callcat' href={`tel:${animal.number}`}>(PHONE) LIGAR</a>
      </footer>
    </div>
  )
};

export default Card
