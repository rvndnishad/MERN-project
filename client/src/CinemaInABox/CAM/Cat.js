import React, {
    Component
} from 'react';



class Cat extends Component {
    render() {
        return (
            <div className="clearfix" >
                <h3 className="page-title">
                    Clothing <small>Category</small>
                </h3>
                <div className="containercam">
                    <div className="portlet light ">
                        <table className="table catplist">
                            <thead>
                                <tr>
                                    <th>Brand Name</th>
                                    <th>Product</th>
                                    <th>Total Duration</th>
                                    <th>Overall</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DOLLARBIGGBOSS</td>
                                    <td>INNERWEAR</td>
                                    <td>195</td>
                                    <td>95%
                                        <div className="graphcst">
                                            <div className="grprogess" style={{ width: '95%' }}></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>DOLLARMISSYLEGGINGS</td>
                                    <td>GARMENTS</td>
                                    <td>185</td>
                                    <td>85%
                                        <div className="graphcst">
                                            <div className="grprogess" style={{ width: '85%' }}></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>FASHIONBIGBAZAR</td>
                                    <td>GARMENTS</td>
                                    <td>165</td>
                                    <td>75%
                                        <div className="graphcst">
                                            <div className="grprogess" style={{ width: '75%' }}></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>FASHIONBIGBAZAR</td>
                                    <td>GARMENTS</td>
                                    <td>155</td>
                                    <td>65%
                                        <div className="graphcst">
                                            <div className="grprogess" style={{ width: '65%' }}></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>REEBOK_1</td>
                                    <td>GARMENTS</td>
                                    <td>160</td>
                                    <td>50%
                                        <div className="graphcst">
                                            <div className="grprogess" style={{ width: '50%' }}></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>LUXLYRALEGGINGS</td>
                                    <td>GARMENTS</td>
                                    <td>140</td>
                                    <td>40%
                                        <div className="graphcst">
                                            <div className="grprogess" style={{ width: '40%' }}></div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cat;