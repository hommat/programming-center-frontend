import React from "react";

import { Repo } from "../../models";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

const RepoCard: React.FC<Omit<Repo, "id">> = ({
  githubURL,
  deployURL,
  name,
  description
}) => {
  return (
    <Box
      component={Card}
      display="flex"
      flexDirection="column"
      height="100%"
      textAlign="left"
      boxShadow={4}
    >
      <CardHeader title={name} />
      <Box component={CardContent} flexGrow={1}>
        <Typography variant="body2">{description}</Typography>
      </Box>
      <CardActions>
        <Button component="a" href={githubURL} color="primary">
          Code
        </Button>
        {deployURL && (
          <Button component="a" href={deployURL} color="primary">
            Site
          </Button>
        )}
      </CardActions>
    </Box>
  );
};

export default RepoCard;
