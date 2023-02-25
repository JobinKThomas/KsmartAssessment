import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import CustomTable from "../components/Table";
import BurialTypeForm from "../components/burial-type-form";

const initialValue = [
  {
    name: "Cremation",
    status: "Active",
  },
  {
    name: "Traditional",
    status: "Active",
  },
  {
    name: "Unkown",
    status: "Inactive",
  },
];

const formInitialValues = { name: "", status: "" };

const BurialTypesPage = () => {
  const Headersection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media only screen and (max-width: 767px) {
      display: block;
    }
    .title {
      font-size: 40px;
      color: Green;
      font-weight: 600;
    }
    .title-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      @media only screen and (max-width: 767px) {
        display: block;
        input {
          margin-bottom: 10px;
        }
      }
    }
    .button {
      background-color: #4caf50;
      color: white;
      padding: 5px 20px;
      border: none;
      border-radius: 20px;
      cursor: pointer;
    }
    .search {
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `;
  const [addOpen, setAddOpen] = useState(false);
  const [addOpenEdit, setAddOpenEdit] = useState(false);
  const [editInitialdata, setEditInitialdata] = useState({});
  const [index, setIndex] = useState(false);
  const [addOpenDelete, setAddOpenDelete] = useState(false);
  const [data, setData] = useState(initialValue);

  const onAddBurialFormSubmit = (values) => {
    setData([...data, values]);
    setAddOpen(false);
  };

  const onClickEdit = (index, value) => {
    setEditInitialdata(value);
    setIndex(index);
    setAddOpenEdit(true);
  };

  const onEditFormSubmit = (values) => {
    const newData = [...data];
    newData[index] = values;
    setData(newData);
    setAddOpenEdit(false);
  };

  const onClickDelete = (index) => {
    setIndex(index);
    setAddOpenDelete(true);
  };

  const onDeleteFormSubmit = () => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setAddOpenDelete(false);
  };

  return (
    <>
      <Headersection>
        <h2 className="title">Burial Type</h2>
        <div className="title-buttons">
          <input className="search" type="text" placeholder="search by name" />
          <button
            className="button"
            onClick={() => {
              setAddOpen(true);
            }}
          >
            + Burial Type
          </button>
        </div>
      </Headersection>

      <CustomTable
        data={data}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Modal show={addOpen} onHide={() => setAddOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Burial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BurialTypeForm
            initialValues={formInitialValues}
            onSubmit={onAddBurialFormSubmit}
          />
        </Modal.Body>
      </Modal>

      <Modal show={addOpenEdit} onHide={() => setAddOpenEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Burial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BurialTypeForm
            initialValues={editInitialdata}
            onSubmit={onEditFormSubmit}
          />
        </Modal.Body>
      </Modal>

      <Modal show={addOpenDelete} onHide={() => setAddOpenDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Burial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button
            onClick={() => {
              onDeleteFormSubmit();
            }}
          >
            Confirm
          </button>
          <button onClick={() => setAddOpenDelete(false)}>Cancel</button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BurialTypesPage;
