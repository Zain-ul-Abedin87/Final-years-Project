import React from 'react'
import '../PostDetail/PostDatail.css'
import SideBar from '../sidebar/sidebar'
import baseUrl from '../../Redux/config'
import axios from 'axios'

class Detail extends React.Component {

    data = {
        id: this.props.match.params.id
    }
    state = {
        item: ''
    }

 


    render() {
        let item = this.props.location.item


        return (

            <>
                <div className="display">

                    <div className="box1">
                        <SideBar />
                    </div>

                    <div className="box2">

                    </div>
                </div>
                <div className="container-fluid">


                    <div className="row product_see" style={{ marginTop: "3%", paddingBottom: '5%' }} >
                        <div className="col-md-8  left">

                            <h3 className="postimg">
                                {item.plant_title ? item.plant_title : null}</h3>

                            <div className="img12">
                                <img className="imgDetail" src={baseUrl + `/uploads/${item.images[0]}`} />
                            </div>

                            <h3 className="postimg">Detail</h3>
                            <div className="detail">

                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Plant Name</th>
                                            <th scope="col">Plant Type</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{item.plant_title ? item.plant_title : null}</td>
                                            <td>{item.plant_category ? item.plant_description : null}</td>
                                            <td>Rs. {item.price_plant ? item.price_plant : null}</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                            <h3 className="postimg">Description</h3>
                            <div className="Description">
                                <p>
                                    {item.plant_description ? item.plant_description : null}
                                </p>
                            </div>

                            {/* ............................................................................. */}
                        </div>
                        <div className="col-md-4 right">

                            <div className="topInfo">


                                <div class="rui-2vHTl">
                                    <section class="_2wMiF">
                                        <h3 className="postimg">Details</h3>

                                        <span data-aut-id="itemPrice" class="_2xKfz">
                                            Rs. {item.price_plant ? item.price_plant : null}

                                        </span>
                                        {/* <h1 data-aut-id="itemTitle" ="_3rJ6e">Residential Plot For Sale In Formanites Housing Scheme Block-N Lahore</h1> */}
                                        <div class="_2kqti">

                                            <div data-aut-id="itemCreationDate" class="_2DGqt"><span>Upload: {item.created_at ? item.created_at.slice(0, 10) : null}</span>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>




                            <div className="topInfo">

                                <div data-aut-id="profileTitle" class="seller">Seller description</div>



                                <h4> <i className="fa fa-user"></i>
                                    {item.plant_title ? item.plant_title : null}
                                </h4>
                                <p>11 November 2020</p>
                                <button type="button" data-aut-id="btnChat" class="rui-3sH3b rui-2yJ_A rui-1BozO">
                                    <i className="fa fa-phone"></i> <span>Chat with seller</span></button>


                            </div>
                            <div className="topInfo">

                                <div data-aut-id="profileTitle" class="seller">Place In</div>


                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.90261803073!2d73.00510519999999!3d31.42168395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2s!4v1597168943421!5m2!1sen!2s" width="300" height="200" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                            </div>















                        </div>


                    </div>
















                </div>

            </>
        )
    }
}

export default Detail