import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import useForm from './Read'

const ViewMovies = () => {
    var [value,setValue]=useForm({movieName:""})
    var [data,loadData]=useState([]) 

    const readFn=()=>{
       console.log(value)
       axios.post("http://localhost:8080/namesearch",value).then(
           (response)=>{
              console.log(response.data) 
              loadData(
                  data=response.data
              )
           }
       )
    }
            
        const btnDelete=(id)=>{
            const data={"_id":id}
            axios.post("http://localhost:8080/delete",data).then(
                (response)=>{
                    console.log(response.data.data)
                    alert(response.data.status)
                }
            ) 
        }

          return (
        <div>
            <Typography variant="h6" color="primary">SEARCH A MOVIE HERE</Typography>
            <TextField variant="outlined" value={value.movieName} onChange={setValue} fullWidth margin="normal" label="Enter Movie Name" name="movieName" />
            <Button onClick={readFn} variant="contained" fullWidth color="primary" >SEARCH</Button>    
             
           <Table>
               <TableHead>
                   <TableRow>
                       <TableCell>Movie Name</TableCell>
                       <TableCell>Actor</TableCell>
                       <TableCell>Actress</TableCell>
                       <TableCell>Director</TableCell>
                       <TableCell>Released Year</TableCell>
                       <TableCell>Camera</TableCell>
                       <TableCell>Producer</TableCell>
                       <TableCell>Language </TableCell>
                       <TableCell>Operation</TableCell>
                   </TableRow>
               </TableHead>

               <TableBody>
                   {data.map( (value,index)=>{
                       return <TableRow>
                           <TableCell> {value.movieName} </TableCell>
                           <TableCell> {value.actor} </TableCell>
                           <TableCell> {value.actress} </TableCell>
                           <TableCell> {value.director} </TableCell>
                           <TableCell> {value.releasedYear} </TableCell>
                           <TableCell> {value.camera} </TableCell>
                           <TableCell> {value.producer} </TableCell>
                           <TableCell> {value.language} </TableCell>
                           <TableCell> <Button onClick={()=>{btnDelete(value._id)}} variant="contained" color="primary">DELETE</Button> </TableCell>
                       </TableRow>
                   })}
               </TableBody>
           </Table>
        </div>
    )
}

export default ViewMovies
