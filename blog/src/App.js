import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일`;

  let [글제목1, a] = useState('무신사 블랙 프라이데이 추천 상품 모음');
  let [글제목2, 글제목변경] = useState('(강추) 자연스럽게 불법 유턴 하는 법');
  let [글제목3, c] = useState('싫어하는 사람 넘어지는 척 자연스럽게 싸대기 때리는 법');
  let [글제목4, d] = useState('도보에서 티라노사우루스를 만났을 때 대처법');


  let [하트, 하트변경] = useState([0, 0, 0, 0]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4> neebesmil </h4>
      </div>

      <button onClick={() => {
        글제목변경('그러면 안됩니다!');
      }}>
        글수정
      </button>
      
      <div className="list">
        <h4> { 글제목1 } </h4>
        <p> { formattedDate } </p>
        <span onClick={() => {
          let copy = [...하트];
          copy[0] = copy[0] + 1;   
          하트변경(copy);
        }}> ❤️ </span> { 하트[0] }
      </div>

      <div className="list">
        <h4> { 글제목2 } </h4>
        <p> { formattedDate } </p>
        <span onClick={() => {
          let copy = [...하트];
          copy[1] = copy[1] + 1;   
          하트변경(copy);
        }}> ❤️ </span> { 하트[1] }
      </div>

      <div className="list">
        <h4> { 글제목3 } </h4>
        <p> { formattedDate } </p>
        <span onClick={() => {
          let copy = [...하트];
          copy[2] = copy[2] + 1;   
          하트변경(copy);
        }}> ❤️ </span> { 하트[2] }
      </div>

      <div className="list">
        <h4> { 글제목4 } </h4>
        <p> { formattedDate } </p>
        <span onClick={() => {
          let copy = [...하트];
          copy[3] = copy[3] + 1;  
          하트변경(copy);
        }}> ❤️ </span> { 하트[3] }
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="model">
    <p> 20251118</p>
    <p> 리액트 연습 </p>
    <p> neebesmil </p>
  </div>
  )
}

export default App;
