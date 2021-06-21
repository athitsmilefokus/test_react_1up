import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// const ComponentDemo: React.FC = (props:{name:string})=>{
//   return <div></div>
// };

export interface IStudent {
  id: number,
  studentName: string,
  score: number,
  age?: number,
  familyNames?: string[],
}
const Teacher = {
  id: 1,
  student: [
    {
      id: 1,
      studentName: "Nuk",
      score: 60,
    },
  ]
}
interface ITeacher {
  id: number,
  student: IStudent[]
}



const mockUp = []
function App() {
  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        studentName: "Nuk",
        score: 60,
      },
      {
        id: 2,
        studentName: "Ping",
        score: 100,
      },
      {
        id: 3,
        studentName: "Amelia Watson",
        score: 14,
      },
      {
        id: 4,
        studentName: "Gawr Gura",
        score: 125,
      },
    ];



    // Task: Create Interface

    console.log(sampleData);

    // Task: filter failing student (score < 60)
    console.log(sampleData.filter(ele => ele.score < 60));

    // Task: Array of name only
    const nameOnly = sampleData.map(ele => ele.studentName);
    console.log(nameOnly);
    // Task: Average score of class

    var sum = 0;
    for (var i = 0; i < sampleData.length; i++) {
      sum += sampleData[i].score; //don't forget to add the base
    }
    var avg = sum / sampleData.length;
    console.log(avg);

    function showStudentName(student: IStudent): number {
      return 1;
    }

    // var SumAll = function sumScoreName(sampleData:any): number {
    //   var sum = 0;
    //   for (var i = 0; i < sampleData.length; i++) {
    //     sum += sampleData[i].score; //don't forget to add the base
    //   }
    //   return sum;
    // }
    // console.log("Total Score: ",SumAll(sampleData));

    function sumScoreName(studentList:IStudent[]): any{
      const total = studentList.reduce((acc,curr) => {
        acc = acc+curr.score;
        return acc
      },0)
     
    }

    console.log("Total Score: ",sumScoreName(sampleData));




    function getScore(obj: IStudent): Promise<number> {
      return new Promise<number>((resolved) => {
        setTimeout(() => {
          resolved(obj.score)
        }, 1000)
      })


    }

    getScore(sampleData[0]).then(ele => {
      console.log(ele);
    })


  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
