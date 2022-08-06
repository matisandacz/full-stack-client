import Display from "./Display";

function History({allClicks}){

    if(allClicks.length === 0){
        return <h2> No Clicks yet </h2>
    }

    return <div>
        <Display message = "Click History" value={allClicks}></Display>
    </div>
}

export default History;