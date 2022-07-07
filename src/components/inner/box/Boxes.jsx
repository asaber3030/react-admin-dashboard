import React from "react";

import './box.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import InventoryIcon from '@mui/icons-material/Inventory';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Boxes = ({ setTheme }) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme} />

      <div className="page-container">

        <Navbar setTheme={setTheme} />

        <div className="box-container">

          <h1><InventoryIcon size='large' /> Box Component</h1>

          <div className="container-com">

            <div className="box">

              <Card sx={{ maxWidth: '65%' }}>
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
                  action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                  title="Artorias"
                  subheader="September 14, 2011"
                />
                <CardMedia
                  component="img"
                  height="400"
                  image="https://images7.alphacoders.com/901/thumbbig-901507.webp"
                  alt="Knight Artorias"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolorem ea fugiat fugit, ipsam laboriosam, nesciunt nostrum, optio quam quas quia quidem quo reiciendis sunt velit voluptatem. Distinctio, voluptatum. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
                  <IconButton aria-label="share"><ShareIcon /></IconButton>
                </CardActions>

              </Card>

            </div>

            <div className="box">

              <Card sx={{ maxWidth: '65%' }}>
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
                  action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                  title="Artorias"
                  subheader="September 14, 2011"
                />
                <CardMedia
                  component="img"
                  height="400"
                  image="https://images7.alphacoders.com/901/thumbbig-901507.webp"
                  alt="Knight Artorias"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolorem ea fugiat fugit, ipsam laboriosam, nesciunt nostrum, optio quam quas quia quidem quo reiciendis sunt velit voluptatem. Distinctio, voluptatum. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
                  <IconButton aria-label="share"><ShareIcon /></IconButton>
                </CardActions>

              </Card>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Boxes;