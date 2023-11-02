import ActionBar from "./components/ActionBar";
import CodeSlash from "./components/CodeSlash";
import { MissionStatement } from "./components/MissionStatement";

function TutorPage() {

    return(
        <div className="bg-slate-800 w-full min-h-screen">
            <ActionBar />
            <div className="text-center md:text-left ml-10 md:ml-20 pt-10">
            <CodeSlash />
            <div className="md:ml-10 p-5 md:w-1/2">
                <h2 className="heading text-xl mb-3 font-medium text-white">
                  Welcome. If you've ever wanted to program or be a Software
                  Engineer but doubted your abilities, keep reading...
                </h2>
                <br></br>
           
                <MissionStatement />
              </div>
              </div>
        </div>
    )
}
export default TutorPage;