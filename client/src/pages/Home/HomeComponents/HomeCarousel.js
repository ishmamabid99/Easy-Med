import { Card, makeStyles, Grid, CardMedia,  Typography, Box} from '@material-ui/core';
import React from 'react'

import Slider from "react-slick";
const useStyles = makeStyles((theme) => ({
  root: {
    alignContent: "center",
    width: "100%",
    height: theme.spacing(52),
  },
  cardStyle: {

    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.4)",
      transform: "scale3d(1.05, 1.05, 1)"
    },
    height: '400px',
    borderRadius: theme.spacing(3),
    backgroundColor: "#FFFFFF",
    transition: "transform 0.15s ease-in-out",

  },
  cardBox: {

    overflow: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    padding: "10%",

  },
  cardTypography: {
    paddingTop:'95%',
    paddingLeft:"10%",
    paddingRight:'10%',
    fontWeight:"700",
    color:"white",
    fontSize:"1.25rem",
    fontFamily:'"Open Sans Condensed", sans-serif'
  },
  cardBoxContainer:{
    position:'absolute',
    top:'0%',
    backgroundColor:'black',
    height:'100%',
    width:'100%',
    opacity:"0.5",
    overflow:"wrap"
  },

  container: {
    position: 'relative',
  }
}))
function HomeCarousel() {
  const classes = useStyles();

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {

        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  const contents = [
    {
      idx: '0',
      text: "",
      src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=600",
      comment: "This is marvelous! helps me a lot in my management -(Trevor Miles)"
    },
    {
      idx: '1',
      text: "Hello",
      src: '',
      comment: "Very good!!"
    },
    {
      idx: '2',
      text: "Hello",
      src: "null",
      comment: "Very good!!"
    },
    {
      idx: '3',
      text: "Hello",
      src: "null",
      comment: "Very good!!"
    },
    {
      idx: '4',
      text: "Hello",
      src: "null",
      comment: "very good!!"
    },
  ]
  return (
    <div align="center" style={{paddingBottom:"3%"}}>
      <Slider {...settings} className={classes.root}>

        {contents.map((element, idx) => (
          <Grid className={classes.cardBox} container >
            <Card className={classes.cardStyle}>
              <div className={classes.container}  >
                <CardMedia
                  component="img"
                  height='400'
                  image={element.src}
                  alt={idx}
                  className={classes.backgroundImageCard}
                >
                </CardMedia>
               
                 
                  <Box className={classes.cardBoxContainer}>
                  <Typography paragraph={true} className={classes.cardTypography}>{element.comment}</Typography>
                  </Box>
              
              </div>
            </Card>
          </Grid>
        ))}
      </Slider>
    </div>
  )
}

export default HomeCarousel
