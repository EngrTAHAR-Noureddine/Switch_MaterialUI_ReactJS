import {Component} from "react";
import Box from '@mui/material/Box';
import CustomSwitch from "./CustomSwitch";

class CustomSwitch extends Component{

    render() {
        return(
           
<Box>
              <CustomSwitch initState={true}
                                                      customTrackColor ={'white'} 
                                                      customOpacityTrack = {1}
                                                      customEnableColor = {'blue'}
                                                      customOpacityEnable = {1}
                                                      customDisableColor={'red'}
                                                      customOpacityDisable = {1}
                                                      customHeight={20}
                                                      customWidth={50}
                                        />
</Box>
         
        );
    }



}
export default CustomSwitch;
