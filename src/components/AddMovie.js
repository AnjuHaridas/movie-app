import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './Read'

const AddMovie = () => {
    var [value,setValue]=useForm({movieName:"",actor:"",actress:"",director:"",releasedYear:"",camera:"",producer:"",language:""})
    
    const readValue=()=>{
        console.log(value)
        axios.post("http://localhost:8080/add",value).then(
            (response)=>{
                console.log(response.data)
                
            }
        )
    }

    return (
        <div>
            
            <TextField onChange={setValue} value={value.movieName} variant="outlined" fullWidth margin="dense" name="movieName" label="Movie Name" />
            <TextField onChange={setValue} value={value.actor} variant="outlined" fullWidth margin="dense" name="actor" label="Actor" />
            <TextField onChange={setValue} value={value.actress} variant="outlined" fullWidth margin="dense" name="actress" label="Actress" />
            <TextField onChange={setValue} value={value.director} variant="outlined" fullWidth margin="dense" name="director" label="Director" />
            <TextField onChange={setValue} value={value.releasedYear} variant="outlined" fullWidth margin="dense" name="releasedYear" label="Released Year" />
            <TextField onChange={setValue} value={value.camera} variant="outlined" fullWidth margin="dense" name="camera" label="Camera" />
            <TextField onChange={setValue} value={value.producer} variant="outlined" fullWidth margin="dense" name="producer" label="Producer" />
            <TextField onChange={setValue} value={value.language} variant="outlined" fullWidth margin="dense" name="language" label="Language" />
            
            <Button onClick={readValue} color="primary" variant="contained" fullWidth>SUBMIT</Button>

        </div>
    )
}

export default AddMovie
 
