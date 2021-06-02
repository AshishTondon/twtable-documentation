import TWTable from "@twister19/twtable";

const Clientside = () => {

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
                    Client-side Paging
                </h1>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <TWTable headers={headers} data={data} downloadableConfig={{download:false}} 
                            defaultstyle={false} pagination={true} pageSize={5} pageoption={[4,5,10,15,20]} />
                </div>  
            </div>

            {/* <div className="row">
                <div className="col-sm-12">
                    <div className="pb-2 mt-4 mb-2 border-bottom">
                        <h2>
                            Code
                        </h2>
                    </div>
                    <pre style={{width:"100%"}}>
                        <code>
                            <p>const headers = &#91;&#123;"column":"name","displayname":"Name","display":true&#125;,&#123;"column":"job","displayname":"Job","display":true&#125;,&#123;"column":"department","displayname":"Depertment","display":true&#125;,&#123;"column":"team","displayname":"Team Strenth","display":true&#125;,&#123;"column":"empId","display":false&#125;&#93;</p>
                            <p>const data = {JSON.stringify(data)}</p>
                            
                            <p>&lt;TWTable headers=&#123;headers&#125; data=&#123;data&#125; downloadableConfig=&#123;&#123;download:false&#125;&#125; 
                            defaultstyle=&#123;false&#125; pagination=&#123;true&#125; pageSize=&#123;5&#125; pageoption=&#123;&#91;4,5,10,15,20&#93;&#125; /&gt;</p>
                        </code>
                    </pre>
                    
                </div>  
            </div> */}
        </div>
    );
};

export default Clientside