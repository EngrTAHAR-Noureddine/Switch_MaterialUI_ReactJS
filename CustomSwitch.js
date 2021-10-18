import {Component} from "react";
import Box from "@mui/material/Box";
import * as React from "react";


class CustomSwitch extends Component{
    constructor(props) {
        super(props);
        this.state = {switchState : this.props.initState ||true};
        this.customHeight = this.props.customHeight || 20;
        this.customWidth = this.props.customWidth || 50;
        this.customTrackColor = this.props.customTrackColor ||'white';
        this.customEnableColor = this.props.customEnableColor || 'green';
        this.customDisableColor = this.props.customDisableColor || 'red';
        this.customOpacityTrack = this.props.customOpacityTrack || 1;
        this.customOpacityEnable = this.props.customOpacityEnable || 1;
        this.customOpacityDisable = this.props.customOpacityDisable ||1;

    }
    toggleSwitch = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        this.setState({switchState : open});
    };

    Track = ()=>(
        <Box width={this.customHeight}
             height={this.customHeight}
             sx={{borderRadius:1000,
                 opacity:this.customOpacityTrack}}
             bgcolor={this.customTrackColor}/>
    )

    EnableBox =()=>(
        <Box width={this.customWidth}
             height={this.customHeight}
             bgcolor={this.customEnableColor}
             justifyContent={'right'}
             display={'inline-flex'}
             sx={{
                 borderRadius:1000,
                 opacity:this.customOpacityEnable
             }}
        >
            {this.Track()}
        </Box>
    )
    DisableBox=()=>(
        <Box width={this.customWidth} height={this.customHeight}
             bgcolor={this.customDisableColor}
             justifyContent={'left'}
             display={'inline-flex'}
             sx={{
                 borderRadius:1000,
                 opacity:this.customOpacityDisable
             }}
        >
            {this.Track()}
        </Box>
    )

    render() {
        return(
            <Box onClick={this.toggleSwitch(!this.state.switchState)}
                 display={'flex'}
                 flexDirection={'column'}
                 width={'fit-content'}
                 height={'fit-content'}
                 justifyContent={'center'}
                 bgcolor={'transparent'}>

                {(this.state.switchState)?this.EnableBox():this.DisableBox()}



            </Box>
        );
    }



}
export default CustomSwitch;