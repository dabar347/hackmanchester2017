import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Sound from 'react-sound';

class AssholeHelper extends Component {

  constructor(props){
    super(props);
    this.state = {
      left: false,
      sound: Sound.status.PLAYING
    }
    this.hidePopUp = this.hidePopUp.bind(this);
  }

  hidePopUp(){
    console.log("Hello m8");
    this.setState(
      (oldState) => {
        return{
          ...oldState,
          sound: Sound.status.PLAYING,
          left: !oldState.left
        }
      }
    );
  }

// http://www.freesfx.co.uk/rx2/mp3s/6/18337_1464631212.mp3
// http://www.freesfx.co.uk/rx2/mp3s/5/16914_1461333028.mp3
// https://www.myinstants.com/media/sounds/greenscreen-wow.mp3
  render(){
    console.log(this.state);
    return(
      <div>
        <Card className={"helper " + (this.state.left ? "helper-left" : "")} onMouseEnter={this.hidePopUp}>
          <CardHeader
            title="Helper"
            subtitle="Professional"
            avatar="./helper.jpg"
          />
          <CardMedia>
            <img src="./helper.jpg" alt="" />
          </CardMedia>
          <CardText>
            Our professional helper is willing to help you wtih your struggles! Dont hesitate to message him!
          </CardText>
          <CardActions>
            <RaisedButton href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" label="Message instructor" secondary={true}/>
          </CardActions>
        </Card>

        <Sound
        url="/icq-message.wav"
        playStatus={this.state.sound}
        onFinishedPlaying={() => {
          this.setState((oldState) => {
            return {
              ...oldState,
              sound: Sound.status.STOPPED
            }
          })
        }}
        playFromPosition={0 /* in milliseconds */}
        />
      </div>
    ); // return
  } // render
}

export default AssholeHelper;
