import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                {/* <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt=""/> */}
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Lorem Ipsum</span>
                <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
                <span>posted on March 2, 2020 by john Blogging Tips</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts