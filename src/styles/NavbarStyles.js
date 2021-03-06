export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto, sans-serif',
    height: '100%',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  //Added to center LevelSlider and Level span
  sliderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    width: '340px',
    marginLeft: '10px',
    marginTop: '3px',
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};
