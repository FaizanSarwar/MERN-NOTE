import React, { useEffect, useState } from "react";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import MainScreen from "../../component/MainScreen";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import notes from "../../data/notes.js";
// import axios from "axios";
import { listNotes } from "../../redux/actions/notesActions";
import Loading from "../../component/Loading";
import ErrorMessage from "../../component/ErrorMessage";

const MyNotes = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const noteData = useSelector((state) => state.noteReducers);
  console.log("note data", noteData);
  const { loading, error, notes } = noteData;
  const nai = useNavigate();

  // const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure..?")) {
      // console.log("deleted");
    }
  };
  // const fetchNotes = async () => {
  //   const data = await axios.get("/api/notes");
  //   setNotes(data.data);
  // };
  // console.log(notes);

  useEffect(() => {
    // fetchNotes();
    if (!userInfo) {
      nai("/");
    }
    dispatch(listNotes());
  }, [dispatch]);

  // const createNoteHandler = ()=>{

  // }

  return (
    <MainScreen title={`Hello ! ${userInfo.name}`}>
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg" 
        // onClick={createNoteHandler}
        >
          Create New Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes?.map((val) => {
        return (
          <Accordion key={val._id} defaultActiveKey={["0"]}>
            <Accordion.Item eventkey="0">
              <Card
                style={{ margin: 10, width: "100%" }}
                // key={note._id}
              >
                <Card.Header style={{ display: "flex" }}>
                  <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                      width: 100,
                    }}
                  >
                    <Accordion.Button as={Card.Text} variant="link">
                      {val.title}
                    </Accordion.Button>
                  </span>

                  <div>
                    <Link to={`/note/${val._id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(val._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse>
                  <Card.Body>
                    <h4>
                      <Badge bg="success">
                        Category &gt; &gt; {val.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{val.content}</p>
                      <footer className="blockquote-footer">
                        Created on {" "}
                        <cite
                          title="Source Title"
                        >
                          {val.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </MainScreen>
  );
};

export default MyNotes;
