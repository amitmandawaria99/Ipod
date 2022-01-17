import React from 'react';
import ZingTouch from 'zingtouch';

class Wheel extends React.Component{
    constructor(){
        super();
    }

    // render = () => {
    rotateWheel = () => {
        var currentAngle = 15;
    
        //region.bind(target, 'rotate', function(e) {
       // var rotatable = document.getElementById('rotatable');
        // currentAngle += e.detail.distanceFromLast;
        // rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
        var containerElement = document.getElementById('wheel-container');
        var activeRegion = ZingTouch.Region(containerElement);
        var childElement = document.getElementById('inner-container');
        activeRegion.bind(childElement, 'rotate', function(event){
        //Perform Operations
        console.log("rotate");

        });
    }
    
        render(){
        return(
            // <div style = {styles.wheelContainer} className='wheel-container'>
            //     <div style = {styles.wheel}>
            <div style = {styles.wheelContainer} id='wheel-container'>
                <div id='inner-container' style = {styles.wheel} onMouseOver={this.rotateWheel}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <img style = {styles.image} src="https://cdn-icons-png.flaticon.com/512/152/152522.png" />
                        </div>

                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725947.png?token=exp=1642432099~hmac=86cf8c662886c8e4ef26f87bef457e51" />
                            <div style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725916.png?token=exp=1642431762~hmac=88b815d636df7c211c60054055927b16" />
                        </div>
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.playButton}>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1641732543~hmac=7055c47d50deccdc22f34f9a8974f100" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    wheelContainer : {
        height : '15rem',
        width : '100%',
        backgroundColor : 'lightgrey',
    },
    wheel : {
        width : '80%',
        height : '90%',
        backgroundColor : 'white',
        margin : '1rem auto',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    middleButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    image: {
        alignSelf : 'center',
        width : '2rem',
        height : '2rem',
    },

}

export default Wheel; 