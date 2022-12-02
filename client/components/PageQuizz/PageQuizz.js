import { Container} from '@mui/system';
import { Grid,Button, Typography } from '@mui/material';

import React,{ useState, useEffect } from 'react';

import CardQuestion from "../utilitaires/CardQuestion"
import CardAnswer from "../utilitaires/CardAnswer"
import CardExplication from '../utilitaires/CardExplication';

function PageQuizz() {

    const [questionValide,setQuestionValide] = useState(false)
    const [carteClick,setCarteClick] = useState()
    const [reponse,setReponse] = useState("")

    const question = { id:2, intitule:"test",explication:"explique toi"}
    const reponseVrai={id:3,text:"text",estVrai:true,question_id:2}
    const reponseFausse1={id:4,text:"text",estVrai:false,question_id:2}
    const reponsseFausse2={id:5,text:"text",estVrai:false,question_id:2}
    const reponseFausse3={id:6,text:"text",estVrai:false,question_id:2}
    const listeReponse = [reponseVrai,reponseFausse1,reponsseFausse2,reponseFausse3]

    const handleReponse = ()=>{
       
        listeReponse.forEach((item)=>{
            if(item.id==carteClick && item.estVrai){
                setReponse("Reponse Valide")
            }
            else if(item.id==carteClick && item.estVrai==false){
                setReponse("Reponse Fausse")
            }
        })
    }
    if(questionValide==false){
        return(
        <Container>

            <Grid container spacing={2} alignItems="center"
                justifyContent="center"
                style={{ minHeight: '90vh' }}>
               
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
                            style={{ display: 'flex', justifyContent: "center" }}>
                            <CardAnswer handleClick={setCarteClick} clicked={carteClick==item.id}  item={item} />
                        </Grid>
                    )
                })}
                
               
                <Grid
                    item
                    md={12}
                    style={{ display: 'flex', justifyContent: "center" }}>
                    <Button onClick={()=>{setQuestionValide(true)
                                            handleReponse()}}>Valider</Button>
                </Grid>
            </Grid>
        </Container>
        )
    }
    else{
            return(
                <Container>

            <Grid container spacing={2} alignItems="center"
                justifyContent="center"
                style={{ minHeight: '90vh' }}>
               
               <Grid
                    item
                    md={12}
                    style={{ display: 'flex', justifyContent: "left" }}>
                    
                    <Typography>{reponse}</Typography>
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
                            style={{ display: 'flex', justifyContent: "center" }}>
                            <CardAnswer questionValide={questionValide}   item={item} />
                        </Grid>
                    )
                })}
                
                <Grid item
                        md={12}
                        style={{ display: 'flex', justifyContent: "space-around" }}>
                   
                        <CardExplication explication={question.explication}/>
                    
                        <Button onClick={()=>{setQuestionValide(false)}}>Question Suivante</Button>
                    
                </Grid>
            </Grid>
        </Container>
            )
    }
   
}

export default PageQuizz