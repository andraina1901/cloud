import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import SoftBox from "components/SoftBox";
import SoftAvatar from "components/SoftAvatar";
import SoftTypography from "components/SoftTypography";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function MyTable({ columns, initialRows }) {
  const { light } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  const [searchValue, setSearchValue] = useState("");
  const [rows, setRows] = useState(initialRows);

  const handleEdit = (editedRow) => {
    console.log("Édition de la ligne :", editedRow);
  };

  const handleDelete = (deletedRow) => {
    const updatedRows = rows.filter((row) => row !== deletedRow);
    setRows(updatedRows);
  };

  const filteredRows = useMemo(() => {
    const lowerSearchValue = searchValue.toLowerCase();

    return rows.filter((row) =>
      columns.some(({ name }) => {
        const cellValue = row[name];

        if (typeof cellValue === "string") {
          return cellValue.toLowerCase().includes(lowerSearchValue);
        } else if (React.isValidElement(cellValue) && cellValue.props.name) {
          return cellValue.props.name.toLowerCase().includes(lowerSearchValue);
        }

        return false;
      })
    );
  }, [searchValue, columns, rows]);

  const renderColumns = columns.map(({ name, align, width }, key) => (
    <SoftBox
      key={name}
      component="th"
      width={width || "auto"}
      pt={1.5}
      pb={1.25}
      pl={align === "left" ? 3 : 1}
      pr={align === "right" ? 3 : 1}
      textAlign={align}
      fontSize={size.xxs}
      fontWeight={fontWeightBold}
      color="secondary"
      opacity={0.7}
      borderBottom={`${borderWidth[1]} solid ${light.main}`}
    >
      {name.toUpperCase()}
    </SoftBox>
  ));

  const renderRows = filteredRows.map((row, key) => {
    const rowKey = `row-${key}`;

    const editColumn = (
      <SoftBox key="edit" component="td" p={1} textAlign="center" borderBottom={`${borderWidth[1]} solid ${light.main}`}>
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
          onClick={() => handleEdit(row)}
        >
          <EditIcon color="secondary" /> Edit
        </SoftTypography>
      </SoftBox>
    );

    const deleteColumn = (
      <SoftBox key="delete" component="td" p={1} textAlign="center" borderBottom={`${borderWidth[1]} solid ${light.main}`}>
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
          onClick={() => handleDelete(row)}
        >
          <DeleteIcon color="secondary" /> Supprimer
        </SoftTypography>
      </SoftBox>
    );

    const tableRow = columns.map(({ name, align }) => (
      <SoftBox
        key={uuidv4()}
        component="td"
        p={1}
        textAlign={align}
        borderBottom={`${borderWidth[1]} solid ${light.main}`}
      >
        {Array.isArray(row[name]) ? (
          <SoftBox display="flex" alignItems="center" py={0.5} px={1}>
            <SoftBox mr={2}>
              <SoftAvatar src={row[name][0]} name={row[name][1]} variant="rounded" size="sm" />
            </SoftBox>
            <SoftTypography variant="button" fontWeight="medium" sx={{ width: "max-content" }}>
              {row[name][1]}
            </SoftTypography>
          </SoftBox>
        ) : (
          <SoftTypography
            variant="button"
            fontWeight="regular"
            color="secondary"
            sx={{ display: "inline-block", width: "max-content" }}
          >
            {row[name]}
          </SoftTypography>
        )}
      </SoftBox>
    ));

    
    tableRow.push(editColumn, deleteColumn);
  
    return <TableRow key={rowKey}>{tableRow}</TableRow>;
 
  });

  return (
    <MuiTable>
      <SoftBox component="thead">
        <TableRow>{renderColumns}</TableRow>
      </SoftBox>
      <TableBody>{renderRows}</TableBody>
    </MuiTable>
  );
}

MyTable.defaultProps = {
  columns: [],
  initialRows: [{}],
};

MyTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  initialRows: PropTypes.arrayOf(PropTypes.object),
};

export default MyTable;
