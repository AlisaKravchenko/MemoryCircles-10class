

export default function Main(){
    let level = '1';
    function onClick(){
        console.log('1');
    }
  return (
    <div>
      <h1>Train your memory!</h1>
        <button className='mainButton' onClick={onClick}>
            <div className='mainButtonWrap'>
                Level {level}
                <div className="arrow-1">
                    <div></div>
                </div>
            </div>
        </button>
      </div>
    
  );
}