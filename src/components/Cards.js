import React, { useState, Fragment } from 'react';
import Card from './Card';
import DATA from './data'

const Cards = (props) => {
  const [ currentPage, handleCurrentPage ] = useState(1);
  const [ cardsPerPage ] = useState(6);
  const [ cards, handleCards ] = useState(DATA);
  // useEffect(() => {
  //   console.log('test');
  // }, [cards])
  const handleClick = ({target}) => {
    handleCurrentPage(+target.id);
  };
  const handleFilter = ({target}) => {
    const filteredAnimals = DATA.filter(animal => {
      return animal.locality === target.value;
    });
    if(!!target.value){
      handleCards(filteredAnimals);
    }else{
      handleCards(DATA);
    }
  }
  const handleOrder = ({target}) => {
    const sortedAnimals = DATA.sort((a,b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    }).map(o => o);
    const sortedAnimalsByDate = DATA.sort((a,b) =>{
      return new Date(b.dataPerdido.year, b.dataPerdido.month, b.dataPerdido.day) - new Date(a.dataPerdido.year, a.dataPerdido.month, a.dataPerdido.day);
    }).map(o => o);
    if(target.value === 'name'){
      handleCards(sortedAnimals);
    }else{
      handleCards(sortedAnimalsByDate);
    }
  }
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentcards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const rendercards = currentcards.map((card, index) => {
    return <Fragment key={index}>
        <Card animal={card} isLoggedIn={props.isLoggedIn} />
      </Fragment>;
  });
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => (
      <li
        key={number}
        id={number}
        className={currentPage === number ? 'active' : ''}
        onClick={handleClick}
      >
        {number}
      </li>
    )
  );

  return (
    <>
      <div className='settings clearfix'>
        <div className='filters clearfix left'>
          Filters by Region:
          <select
            name='filter'
            onChange={handleFilter}
            multiple={false}
          >
            <option value="">All</option>
            <option value="USA">USA</option>
            <option value="Cebu">Cebu</option>
            <option value="Philippines">Philippines</option>
          </select>
        </div>

        <div className='filters clearfix right'>
          Order by:
          <select
            name='order'
            onChange={handleOrder}
          >
            <option value="all">All</option>
            <option value="name">name</option>
            <option value="date">date</option>
          </select>
        </div>
      </div>
      <div className='cards-donations'>
        {rendercards}
      </div>
      <ul className='page-numbers'>
        {renderPageNumbers}
      </ul>
    </>
  );
}

export default Cards
