const Introduction = () => (
<div className="container">
    <div class="pb-2 mt-4 mb-2 border-bottom">
        <h1>
            Introduction
        </h1>
    </div>

    <div className="row">
        <div className="col-sm-12">
            <p>Twtable is a light weight reactjs module for Table UI.</p>
            <p>USP for Twtable module
                <ul>
                    <li>Light weight</li>
                    <li>Client-side paging</li>
                    <li>Server-side paging</li>
                    <li>CSV and excel download options</li>
                </ul>
            </p>
        </div>
    </div>

    <div className="row">
        <div className="col-sm-12">
            <div class="pb-2 mt-4 mb-2 border-bottom">
                <h2>
                    Twtable Attributes
                </h2>
            </div>

            <table className="table table-bordered">
                <tr>
                    <th style={{width:"20%"}}>Attribute</th>
                    <th style={{width:"10%"}}>Require</th>
                    <th style={{width:"60%"}}>Description</th>
                    <th style={{width:"10%"}}>Version Support</th>
                </tr>
                <tr>
                    <td><p>headers</p></td>
                    <td><p>true</p></td>
                    <td><p>Json, As described in above point</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>data</p></td>
                    <td><p>true</p></td>
                    <td><p>Json OR Function, JSON for client-side pagination and Function for Server-side pagination</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>pagination</p></td>
                    <td><p>false</p></td>
                    <td><p>Boolean, defualt value false. True for adding pagination in table</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>filter</p></td>
                    <td><p>false</p></td>
                    <td><p>Boolean, defualt value false. True for adding serach box in table.</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>serversidePagination</p></td>
                    <td><p>false</p></td>
                    <td><p>Boolean, if true table will fetch data from API</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>defaultstyle</p></td>
                    <td><p>false</p></td>
                    <td><p>Boolean, Default value true. If false twtable will include default css</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>heading</p></td>
                    <td><p>false</p></td>
                    <td><p>String, Table heading</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>pageoption</p></td>
                    <td><p>false</p></td>
                    <td><p>Array, array of number</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>pageSize</p></td>
                    <td><p>false</p></td>
                    <td><p>Number, default value is 10. This attribute defines size of the each page in case of pagination.</p></td>
                    <td><p>1.5.4 +</p></td>
                </tr>
                <tr>
                    <td><p>downloadableConfig</p></td>
                    <td><p>false</p></td>
                    <td>
                        <p>JSON, three optional attributes</p>
                        <table>
                            <tr>
                                <th style={{width:"30%"}}>Attribute</th>
                                <th style={{width:"70%"}}>Description</th>
                            </tr>
                            <tr>
                                <td><p>download</p></td>
                                <td><p>Boolean, Default is True. If false, Download option will be off.</p></td>
                            </tr>
                            <tr>
                                <td><p>reportfn</p></td>
                                <td><p>String OR Function, Defualt value 'twtable' then twtable will handle download options. If function, the function will be called on download option click.</p></td>
                            </tr>
                            <tr>
                                <td><p>reportOption</p></td>
                                <td><p>Array, Array of type of report you want to have download options. Defulat value is ['csv', 'excel'] (only these two type of report handled by twtable. User can have more options. But with 'reportfn' attribute as function.).</p></td>
                            </tr>
                        </table>
                    </td>
                    <td><p>1.6.0 +</p></td>
                </tr>
            </table>
        </div>
    </div>
</div>
);

export default Introduction;