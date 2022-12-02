import { Container} from '@mui/system';
import { Grid,Button, Typography } from '@mui/material';

import React,{ useState, useEffect } from 'react';

import CardQuestion from "../utilitaires/CardQuestion"
import CardAnswer from "../utilitaires/CardAnswer";
import CardExplication from '../utilitaires/CardExplication';
import ProgressBar from './ProgresseBar/progressBar';

function PageQuizz() {

    const [questionValide,setQuestionValide] = useState(false)
    const [carteClick,setCarteClick] = useState()
    const [reponse,setReponse] = useState("")
    const [colorReponse,setColorReponse] = useState("")
    const [completed,setCompleted] = useState(0)

    const question = { id:2, intitule:"test",explication:"explique toi"}
    const reponseVrai={id:3,text:"text",estVrai:true,question_id:2}
    const reponseFausse1={id:4,text:"text",estVrai:false,question_id:2}
    const reponsseFausse2={id:5,text:"text",estVrai:false,question_id:2}
    const reponseFausse3={id:6,text:"text",estVrai:false,question_id:2}
    const listeReponse = [reponseVrai,reponseFausse1,reponsseFausse2,reponseFausse3]

  

    

    const handleReponse = ()=>{
       
        listeReponse.forEach((item)=>{
            if(item.id==carteClick && item.estVrai){
                setReponse("Bonne réponse")
                setColorReponse("#99FF99 ")
            }
            else if(item.id==carteClick && item.estVrai==false){
                setReponse("Mauvaise réponse")
                setColorReponse("#FE6565")
            }
        })
    }
    if(questionValide==false){
        return(
        <Container sx={{ display: 'flex' }}>

            <Grid sx={{ borderRadius: '16px' }} container spacing={2} alignItems="center"
                justifyContent="center"
                style={{ minHeight: '90vh',backgroundColor:'#E2EEFC' }}>
                <Grid
                    item
                    md={12}
                    style={{ display: 'flex', justifyContent: "center" }}>
                    <ProgressBar completed={completed*10}/>
                </Grid>
                <Grid
                    item
                    md={12}
                    style={{ display: 'flex', justifyContent: "center" }}>
                </Grid>
                <Grid
                    item
                    md={12}
                    style={{ display: 'flex', justifyContent: "center" }}>
                    <CardQuestion question={question}/>
                </Grid>
                {listeReponse.map((item)=>{
                    return(
                        <Grid
                            item
                            md={6}
                            xs={12}
                            style={{ display: 'flex', justifyContent: "center" }}>
                            <CardAnswer handleClick={setCarteClick} clicked={carteClick==item.id}  item={item} />
                        </Grid>
                    )
                })}
                
               
                <Grid
                    item
                    md={12}
                    style={{ display: 'flex', justifyContent: "center" }}>
                    <Button onClick={()=>{  if(carteClick!=null){
                                            setQuestionValide(true)
                                            handleReponse()
                                            }
                                            else{
                                                alert("Veuillez choisir une réponse.")
                                            }
                                            }}>Valider</Button>
                </Grid>
            </Grid>
        </Container>
        )
    }
    else{
            return(
                <Container sx={{marginTop:10}}>

            <Grid sx={{ borderRadius: '16px' }} container spacing={2} alignItems="center"
                justifyContent="center"
                style={{ minHeight: '90vh',backgroundColor:'#E2EEFC' }}>
               
               <Grid
                    item
                    md={12}
                    style={{ display: 'flex', justifyContent: "center", marginTop:10 }}>
                    
                    <Typography sx={{ borderRadius: '16px', border:5,m:-10 }} style={{color:colorReponse}} variant='h3'>{reponse}</Typography>
                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                    style={{ display: 'flex', justifyContent: "center" }}>
                    <CardQuestion question={question}/>
                </Grid>
                {listeReponse.map((item)=>{
                    if(item.estVrai || item.id==carteClick){
                    return(
                        <Grid
                            item
                            md={6}
                            xs={12}
                            style={{ display: 'flex', justifyContent: "center" }}>
                            <CardAnswer questionValide={questionValide}   item={item} />
                        </Grid>
                    )}
                })}
                
                <Grid item
                        md={12}
                        style={{ display: 'flex', justifyContent: "space-around" }}>
                   
                        <CardExplication  explication={question.explication}/>
                    
                        <Button onClick={()=>{setQuestionValide(false)
                                                setCompleted(completed+1)
                                                setCarteClick(null)}}>Question Suivante</Button>
                    
                </Grid>
            </Grid>
        </Container>
            )
    }
   
}

export default PageQuizz