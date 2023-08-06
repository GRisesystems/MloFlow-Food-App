import React from 'react';
import { Grid, Link, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  link: {
    color: theme.palette.primary.contrastText,
    marginRight: theme.spacing(2),
    textDecoration: 'none',
  },
}));

const NewCategory: React.FC = () => {
  const classes = useStyles();

  const categoryLinks = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    // Add more links as needed
  ];

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        {categoryLinks.map((link, index) => (
          <Link key={index} href={link.url} className={classes.link}>
            {link.label}
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default NewCategory;
