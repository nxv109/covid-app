import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import CountUp from "react-countup";

import "./Cards.css";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  return (
    <>
      <Grid item xs={12}>
        <Grid container justify="space-evenly" spacing={2}>
          <Grid item xs>
            <Card className="cardItem confirmed">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Confirmed
                </Typography>
                <Box component="div" className="mt-1 mb-1">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography color="textSecondary">
                      {new Date(lastUpdate).toDateString()}{" "}
                    </Typography>
                    <Chip label="Updated!" disabled variant="outlined" />
                  </Grid>
                </Box>
                <Typography variant="body2" component="div">
                  {confirmed ? (
                    <CountUp
                      start={0}
                      end={confirmed.value}
                      duration={2.5}
                      separator=","
                      className="cardsValueConfirmed"
                    />
                  ) : (
                    "Loading..."
                  )}
                </Typography>
              </CardContent>
              <CardActions aligncenter="true">
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className="cardItem recovered">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Recovered
                </Typography>
                <Box component="div" className="mt-1 mb-1">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography color="textSecondary">
                      {new Date(lastUpdate).toDateString()}{" "}
                    </Typography>
                    <Chip label="Updated!" disabled variant="outlined" />
                  </Grid>
                </Box>
                <Typography variant="body2" component="div">
                  {recovered ? (
                    <CountUp
                      start={0}
                      end={recovered.value}
                      duration={2.5}
                      separator=","
                      className="cardsValueRecovered"
                    />
                  ) : (
                    "Loading..."
                  )}
                </Typography>
              </CardContent>
              <CardActions aligncenter="true">
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className="cardItem deaths">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Deaths
                </Typography>
                <Box component="div" className="mt-1 mb-1">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography color="textSecondary">
                      {new Date(lastUpdate).toDateString()}{" "}
                    </Typography>
                    <Chip label="Updated!" disabled variant="outlined" />
                  </Grid>
                </Box>
                <Typography variant="body2" component="div">
                  {deaths ? (
                    <CountUp
                      start={0}
                      end={deaths.value}
                      duration={2.5}
                      separator=","
                      className="cardsValueDeaths"
                    />
                  ) : (
                    "Loading..."
                  )}
                </Typography>
              </CardContent>
              <CardActions aligncenter="true">
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
