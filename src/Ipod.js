import React from 'react';
// import Wheel from './Wheel';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'Wallpapers',
            activePage : 'Home',
            enter : 0
        }
    }


    rotateWheel = () => {

        var currentAngle = 15;
        var containerElement = document.getElementById('wheel-container');
        var activeRegion =  new ZingTouch.Region(containerElement);
        var childElement = document.getElementById('inner-container');
        var change = 0;
        var self = this;

        self.state.enter = self.state.enter + 1;

        if(self.state.enter < 2){
            activeRegion.bind(childElement, 'rotate', function(event){
                //Perform Operations

                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);

                if(newAngle < 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'Wallpapers'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Wallpapers"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage == 'Home'){
                            if(self.state.activeItem === 'Wallpapers'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Wallpapers"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }
                        }else if(self.state.activePage == 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }
            });
        }else{
            console.log("Not allowed to enter")
        }
      
    }

    changePage = () => {

        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : this.state.activeItem
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }

    }

    changePageToHomeScreen = () => {
        
        if(this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists'){
            this.setState({
                activeItem : 'Music',
                activePage : 'Home'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'Home'
            })
        }

    }
    render(){
        return(
            <div style = {styles.ipodContainer}>
                
                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} />

                <div style = {styles.wheelContainer} id='wheel-container'>
                <div id='inner-container' style = {styles.wheel} onMouseOver={this.rotateWheel}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <img onClick={this.changePageToHomeScreen} style = {styles.image} src="https://cdn-icons-png.flaticon.com/512/152/152522.png" />
                        </div>

                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725947.png?token=exp=1642432099~hmac=86cf8c662886c8e4ef26f87bef457e51" />
                            <div onClick={this.changePage} style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725916.png?token=exp=1642431762~hmac=88b815d636df7c211c60054055927b16" />
                        </div>
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.playButton}>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1642434449~hmac=06a2c4110d505bc57be28f4408fef175" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

const styles = {
    ipodContainer : {
        height : '33rem',
        width : '20rem',
        backgroundColor : 'lightgray',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px'
    },
    wheelContainer : {
        height : '45%',
        width : '90%',
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

export default Ipod; 