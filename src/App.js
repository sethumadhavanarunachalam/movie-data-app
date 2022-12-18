import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
// import {IconButton,InfoIcon} from '@mui/material/IconButton';
import { Card, IconButton} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { minHeight } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// function App() {
//   return (
//     <div>
//       <Router/>
//     {/* <MovieList/>
//     <AddColor/> */}
//     </div>
//   );
// }

function App(){
  const [movieList,setMovieList] =  useState([
    {
      id: "100",
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      id: "101",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      id: "102",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      id: "103",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      id: "104",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      id: "105",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: "106",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      id: "107",
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ]);
   const navigate = useNavigate();
   const [mode,setMode]= useState("dark");
    
   const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return(
    <ThemeProvider theme={darkTheme}>
      <Paper   elevation={4} />
  <div>   
     <AppBar position="static">
        <Toolbar>
          <IconButton
            // size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={()=> navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography onClick={()=> navigate("/movielist")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie
          </Typography>
          <Typography onClick={()=> navigate("/addcolor")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ColorGame
          </Typography>
          <Typography onClick={()=> navigate("/addmovie")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AddMovie
          </Typography>
          <Button color="inherit"  onClick={()=> setMode(mode === "light" ? "dark" : "light")}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            {mode === "light" ? "dark" : "light"}mode</Button>
        </Toolbar>
      </AppBar>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/movielist" element={<MovieList movieList={movieList}   />} />
        <Route path="/addcolor" element={<AddColor  />} />
        <Route path="/movie" element={<Movie  />} />
        <Route path="/movie/:ids" element={<MovieDetails movieList={movieList} />} />
        <Route path="/addmovie" element={<AddMovie movieList={movieList} setMovieList={setMovieList}  />} />
        {/* <Route path="/movielist/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} /> */}
      </Routes>
</div>
<Paper/>
</ThemeProvider>
)}

function MovieDetails({movieList}){
  const {ids} = useParams();
  const movie = movieList[ids];
  console.log(movieList,movie);
  const navigate = useNavigate();
  return<div className="movie-details-body">
  <div className="movie-details">
     <iframe 
     width="100%"
      height="550"
       src={movie.trailer}
        title="RRR Trailer (Tamil) - NTR | Ram Charan | Ajay Devgn | Alia Bhatt | SS Rajamouli | Mar 25th 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="rating-name-moviedetails"><h1>{movie.name}</h1>
       
        
          <h4>⭐{movie.rating}</h4>
      </div>
    <p>{movie.summary}</p>
    <Button onClick={()=> navigate(-1)} variant="contained" startIcon={<KeyboardBackspaceIcon/>}>
  back
</Button>
  </div>
  </div>
}

function AddMovie({movieList,setMovieList}){

  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setSummary]=useState("");
   
  const addMovie = () => {
    const newMovie = {
      name:name,
      poster:poster,
      rating:rating,
      summary:summary,
    };
     setMovieList([...movieList,newMovie])
  }
  return<div className="input-box">

    <input placeholder="name" onChange={(event)=> setName(event.target.value)}/>
    <input placeholder="poster" onChange={(event)=> setPoster(event.target.value)} />
    <input placeholder="rating"  onChange={(event)=> setRating(event.target.value)}/>
    <input placeholder="summary" onChange={(event)=> setSummary(event.target.value)}/>
    <button onClick={addMovie}>addmovie</button>
  </div>;
}
function AddColor(){
  const [color,setColor] = useState("orange");
  const styles = {
   background : color, 
  }
  const [colorList,setColorList] = useState(["red","green","black","gray",]);

  return(
    <div><h1>hi</h1>
    <input style={styles} 
    onChange={(event)=> setColor(event.target.value) }
     value={color} type="text"/>
    <button onClick={()=> setColorList([...colorList,color])}>add color</button>
    {colorList.map((clr)=> (<ColorBox color={clr}/>))}
    </div>
  );
}

function ColorBox({color}){
  const styles = {
    width : "200px",
    height : "40px",
    background: color,
  }
  return(
     <div style = { styles}></div>
  );
}

function MovieList({movieList}){

  
  return(
    <div>
  <div className="movie-list">
    {movieList.map((mv,index)=> (
    <div key={index}>
    <Movie movie={mv} id={index}/> </div>))}
    </div>
    </div>
  );
}


function Home(){
  return <div><h1>sethu</h1></div>
}
function Movie({movie,id}){
  const navigate = useNavigate();
  return(
    <Card className="movie-container">
        <CardContent>
        <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={movie.poster}
      />
      {/* <img className="movie-poster" src={movie.poster} alt=""/> */}
      <div className="rating-name">
      <h1>{movie.name}</h1>
        <h2><IconButton
        color="primary"
        onClick={() => navigate (`/movie/${id}`)}
        aria-label= "Toggle Summary">
          
          <InfoIcon/>
        </IconButton>
        </h2>
          <h4>⭐{movie.rating}</h4>
      </div>
        <p>{movie.summary}</p>
        </CardContent>
        <CardActions>
        <Counter/>
        </CardActions>
    </Card>
    );    
}

function Counter(){
  // const [show,setShow] = useState(true);
  const [like,setLike] = useState(0);
  const [dislike,setDisLike] = useState(0);

  const likestyles = {
     color : like < 10 ? "skyblue" : "green", 
  }
  const dislikestyles = {
     color : dislike < 10 ? "skyblue" : "red", 
  }
  return(
    <div>
    <IconButton style={likestyles} aria-label="like" onClick={()=> setLike (like+ 1)}>
    <Badge  color="primary" badgeContent={like}>
    👍
</Badge>
</IconButton>
    <IconButton style={dislikestyles}aria-label="like" onClick={()=> setDisLike (dislike+ 1)}>
    <Badge  color="primary" badgeContent={dislike}>
    👎
</Badge>
</IconButton>
    
    
    </div>
  );
}
export default App;
