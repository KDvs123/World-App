import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function CountryCard(props) {
  return (
    <Card sx={{ maxWidth: 345, width: 290  }}>
      <CardMedia
        sx={{ height: 180 }}
        image={props.flagUrl}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.capital} | {props.population}
        </Typography>
      </CardContent>
    </Card>
  );
}
