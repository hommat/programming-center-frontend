import React from "react";

import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

type Props = {
  options: string[];
  selected: string;
  onSelect: (selected: string) => void;
};

const SelectableList: React.FC<Props> = ({ options, selected, onSelect }) => {
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {options.map(option => (
        <Box m={0.5} key={option}>
          <Chip
            label={option}
            color={option === selected ? "primary" : "default"}
            clickable
            onClick={() => onSelect(option)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SelectableList;
