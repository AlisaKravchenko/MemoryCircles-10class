import { levels } from "./data";
import LevelButton from "./LevelButton";
import ExitButton from "./ExitButton";
export default function Levels({onChangeLevel}){
    const handleChangeLevel = (level) => {
        onChangeLevel(level);
    }

    
  return (
    <div>
        <h1>LEVELS</h1>
        <div className='levels'>
            {Object.keys(levels).map((key,index) => <LevelButton changeLevel={handleChangeLevel} key={levels[key]} level={index+1} />)}
        </div>
        <ExitButton />
      </div>
    
  );
}