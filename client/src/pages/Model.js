
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { forwardRef } from "react";
import './model.css';
import { HiOutlineTrash } from "react-icons/hi";
import { red } from "@mui/material/colors";

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});




function Model({ open, closeDialog, title,deleteFunction}) 
{
 
  // const classes=usestyles();

 return (
   
//  <Dialog
//       fullWidth
//       open={open}
//       // maxWidth="md"
//       scroll="body"
//       onClose={closeDialog}
//       onBackdropClick={closeDialog}
//       TransitionComponent={Transition}
//        >
      
// <DialogContent sx={{ px: 5, py: 3,  position: "relative" }}  className="dialog-s">
      
//   {/* <IconButton
//           size="medium"
//           onClick={closeDialog}
//           sx={{ position: "absolute", right: "1rem", top: "1rem" }}
//         >
//           X
//         </IconButton> */}

      
//   <Grid container spacing={1}>
         
//  {/* <Grid item xs={10}> */}
           
//  <Box
//               sx={{
                
//                 display: "flex",
//                 justifyContent: "flex-start",
//                 flexDirection: "column",
//               }}
//             >
           
//    <Typography variant="h5">Delete {title}
// </Typography>

             
//  <Typography variant="body1" >
               
//  Are you sure you want to delete this {title} ?
             
//  </Typography>
            
// </Box>
        
//   </Grid>
        
//   <Grid
//             item
//             xs={5}
//             sx={{ display: "flex", justifyContent: "flex-end", gap: "5px" }}
//           >
     
//        <Button onClick={closeDialog} size="medium" variant="contained" color="primary">
//               Cancel
//             </Button>
//             <Button onClick={deleteFunction} size="medium" variant="contained" color="error">
//               Delete
//             </Button>
// {" "}
//           </Grid>
       
//  {/* </Grid> */}
      
// </DialogContent>
  
//   </Dialog>

<Dialog    open={open}
           onClose={closeDialog}
           onBackdropClick={closeDialog}
           TransitionComponent={Transition}
           PaperProps={{sx:{width:'300px' ,height:'32%',backgroundColor:'rgb(66, 63, 63)',textAlign:'center',borderRadius:'20px'}}}  
              
           >   
               
<DialogTitle alignItems="center" textAlign="center" >
<HiOutlineTrash color="white" size="50px" 
   />
</DialogTitle>

<DialogContent >

  <Typography variant="h7"  textAlign="center" color="white">
    Are You Sure You Want to Delete:{title}
  </Typography>
</DialogContent>


<DialogActions sx={{textAlign:'center' ,alignItems:'center'}}>
      <Button onClick={closeDialog} size="medium" variant="contained"
      >
              Cancel
            </Button>
            <Button onClick={deleteFunction} size="medium" variant="contained" color="error">
              Delete
             </Button>
</DialogActions>
</Dialog>
  

);

}


export default Model;


// color="primary"