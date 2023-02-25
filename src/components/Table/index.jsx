import Table from "react-bootstrap/Table";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function CustomTable({ data, onClickEdit, onClickDelete }) {
  const CustomTable = styled.div`
    padding: 30px 0;
    tr {
      background-color: white;

      border: 5px solid #f5f5f5;
    }
    td,
    th {
      padding: 10px;
    }
    .icon-link {
      padding: 10px;
      cursor: pointer;
    }
    .icon-link:hover {
      opacity: 0.5;
    }
  `;
  return (
    <CustomTable>
      <Table size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                <a
                  onClick={() => {
                    onClickEdit(index, item);
                  }}
                >
                  <FontAwesomeIcon className="icon-link" icon={faEdit} />
                </a>
                <a
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  <FontAwesomeIcon className="icon-link" icon={faTrash} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CustomTable>
  );
}

export default CustomTable;
