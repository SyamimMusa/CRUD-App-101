import { Fragment, useEffect, useState } from "react";
import { getList } from "./api/todo";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [postEditable, setPostEditable] = useState({
    id: 0,
    editable: false,
    tweet: "",
  });

  const editPostHandler = () => {
    console.log("edit");
  };
  const deletePostHandler = () => {
    console.log("delete");
  };

  const createPostHandler = () => {
    console.log("create");
  };

  const onConfirmEditPostHandler = () => {
    console.log("edit");
  };

  const setEditablePostHandler = (id, tweet) => {
    setPostEditable({
      id,
      tweet,
      editable: !postEditable.editable,
    });
  };

  const refetch = () => {
    setIsLoading(true);
    getList()
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    refetch();
  }, []);

  const renderData = () => {
    if (!data.length) {
      return <div>No Data</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      data &&
      data.map((item) => {
        return postEditable.editable && postEditable.id === item.postId ? (
          <Fragment key={uuid()}>
            <div style={{ display: "flex", width: "100%" }}>
              <input
                style={{ width: "100%" }}
                type="text"
                value={postEditable.tweet}
                onChange={(e) => {
                  setPostEditable({
                    ...postEditable,
                    tweet: e.target.value,
                  });
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  flexDirection: "row",
                  gap: "4px",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setPostEditable({ ...postEditable, editable: false })
                  }
                >
                  Cancel
                </button>
                <button type="button" onClick={() => editPostHandler()}>
                  Edit
                </button>
              </div>
            </div>
          </Fragment>
        ) : (
          <div key={uuid()}>
            <div>{item.name ?? "Unknown"}</div>
            <div>{item.tweet ?? "Empty"}</div>
            <div className="action-wrapper">
              <button
                type="button"
                onClick={() => {
                  setEditablePostHandler(item.postId, item.tweet);
                }}
                className="action-button"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => {
                  deletePostHandler();
                }}
                className="action-button"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })
    );
  };

  return (
    <div>
      <div className="container">{renderData()}</div>
    </div>
  );
}

export default App;
