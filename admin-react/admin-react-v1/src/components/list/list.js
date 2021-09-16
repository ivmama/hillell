import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
// import Item from "./Item";
import styled from "styled-components";
const ListWrapper = styled.div`
  padding-top: 2em;
  width: 90%;
  margin: 0 auto;
`;

const List = ({ users }) => {
  return (
    <ListWrapper>
      <TableContainer component={Paper}>
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell  align="center">
                Name
              </TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {users.map((user) => (
                    <Item key={user.id} user={user} />
                ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </ListWrapper>
  );
};

export default List;
