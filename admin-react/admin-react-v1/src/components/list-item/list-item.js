import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useHistory } from "react-router";

const ListItem = () => {
  return (
    <TableRow onClick={() => history.push("/users/" + user.id)}>
      <TableCell align="right">{user.name}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
    </TableRow>
  );
};


export default ListItem;