import React from 'react';

class Wheel extends React.Component{
    constructor(){
        super();
    }

    render = () => {
        return(
            <div style = {styles.wheelContainer} className='wheel-container'>
                <div style = {styles.wheel}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <img style = {styles.image} src="https://cdn-icons-png.flaticon.com/512/152/152522.png" />
                        </div>

                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725947.png?token=exp=1641732489~hmac=d912763ebe564f18f9b379cbc6f698f3" />
                            <div style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725916.png?token=exp=1641732426~hmac=d8f94092ebb878cd08fc7ebc07712497" />
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
        height : '13rem',
        width : 'inherit',
        backgroundColor : 'lightgrey',
        alignSelf : 'flex-end'
    },
    wheel : {
        width : '15rem',
        height : 'inherit',
        backgroundColor : 'white',
        margin : 'auto',
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