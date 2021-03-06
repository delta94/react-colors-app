import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

function MiniPalette({
  classes,
  paletteName,
  id,
  emoji,
  colors,
  handleClick,
  handleDelete,
}) {
  const deletePalette = (e) => {
    e.stopPropagation();
    handleDelete(id);
  };

  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    />
  ));

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
