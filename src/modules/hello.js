import TWTable from "@twister19/twtable";

const Hello = () => {

    const headers = [{column: "name",displayname: "Name", display: true},
                      {column: "job",displayname: "Job", display: true},
                      {column: "department",displayname: "Depertment", display: true},
                      {column: "team",displayname: "Team Strenth", display: true},
                      {column: "empId", display:false}];

    const data = [{name:"Ashish", job:"SoftWare Engineer", department:"MB", team:3, empId:1}, 
                    {name:"Nishant",job:"Business",department:"Data2C", team:4, empId:2},
                    {name:"Mukesh",job:"Banker",department:"Data2C", team:5, empId:3},
                    {name:"Shashi",job:"Home Maker",department:"Data2C", team:7, empId:4},
                    {name:"Kanika",job:"Business",department:"Data2C", team:9, empId:5},
                    {name:"Kanika1",job:"Business",department:"Data2C", team:9, empId:6}];

    return(
        <div className="container">
            <div className="pb-2 mt-4 mb-2 border-bottom">
                <h1>
                    Hello Wrold Twtable
                </h1>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <TWTable headers={headers} data={data} downloadableConfig={{download:false}} 
                            defaultstyle={false}/>
                </div>  
            </div>
        </div>
    );
};

export default Hello