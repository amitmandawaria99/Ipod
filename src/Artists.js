import React from 'react';

class Artists extends React.Component{

    constructor(){
        super();
    }


    render(){
        return(
            <div style={styles.artistsContainer}>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>

                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>IPod.js <span><img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/447/447591.png" /></span></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made with <img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/512/833/833472.png" ></img> by : Amit Mittal</p>
                    </div>

                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thanks for visiting the app !!</h5>
                </div>
            </div>
        );
    }

}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url("https://images.news18.com/ibnlive/uploads/2019/07/Shawn-Mendes-Camila-Cabello.jpg")`,
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
}

export default Artists; 