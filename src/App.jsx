import Questions from "./assets/components/Questions"
function App() {

  
  return (
    // <div className="w-1/2 flex flex-col justify-center mx-auto">
    // <h1 className="font-bold text-xl text-center">Static Quiz App</h1>
    // <h3 className="font-semibold text-xl text-center">Project name: quiz-app</h3>

    // <div className="w-135 h-50 flex flex-col justify-center mx-auto mt-5 border border-transparent rounded-md shadow-2xl ">
    //     <h3 className="ml-3.5 font-semibold">What is the capital of france?</h3>
    //     <div className="w-125 border border-transparent rounded-md mx-auto bg-red-300 mb-0.5"> <p className="ml-2">Berlin</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-red-300 mb-0.5"> <p className="ml-2">{props.answer2}</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-green-300 mb-0.5"> <p className="ml-2">{props.answer3}</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-red-300 mb-0.5"> <p className="ml-2">{props.answer4}</p> </div>
    // </div>

    // <div className="w-135 h-50 flex flex-col justify-center mx-auto mt-5 border border-transparent rounded-md shadow-2xl">
    //     <h3 className="ml-3.5 font-semibold">{props.quiz2}</h3>
    //     <div className="w-125 border border-transparent rounded-md mx-auto bg-red-300 mb-0.5"> <p className="ml-2">{props.answer5}</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-green-300 mb-0.5"> <p className="ml-2">{props.answer6}</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-red-300 mb-0.5"> <p className="ml-2">{props.answer7}</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-red-300 mb-0.5"> <p className="ml-2">{props.answer8}</p> </div>
    // </div>

    // <div className="w-135 h-50 flex flex-col justify-center mx-auto mt-5 border border-transparent rounded-md shadow-2xl">
    //     <h3 className="ml-3.5 font-semibold">{props.quiz3}</h3>
    //     <div className="w-125 border border-transparent rounded-md mx-auto bg-red-300 mb-0.5"> <p className="ml-2">{props.answer9}</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-red-300 mb-0.5"> <p className="ml-2">{props.answer10}</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-green-300 mb-0.5"> <p className="ml-2">{props.answer11}</p> </div>
    //     <div className="w-125 border border-transparent rounded-md mx-auto  bg-red-300 mb-0.5"> <p className="ml-2">{props.answer12}</p> </div>
    // </div>
    // </div>

    <Questions
    quiz1="What is the capital of France?"
    answer1="Paris"
    answer2="Berlin"
    answer3="Madrid"
    answer4="Rome"

    quiz2="Who is the creator of reactjs?"
    answer5="google"
    answer6="facebook"
    answer7="microsoft"
    answer8="apple"

    quiz3="Which programmimg language is used for react?"
    answer9="phyton"
    answer10="java"
    answer11="javascript"
    answer12="c++"
    />
  )
}

export default App