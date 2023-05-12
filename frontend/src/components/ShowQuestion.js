/**
 * CS-5356-TODO
 * Show a question and upvote/dismiss it
 *
 * When a user clicks on the Upvote button,
 * make a PUT /api/class-session/:session-code/question/:question-id
 * to upvote the question.
 *
 *
 * If it completes successfully, call `props.onQuestionUpvoted()`
 * to tell the parent component to refresh the view
 */
const ShowQuestion = props => {
  const handleUpvote = questionId => {
    console.log("Upvoting questionId", questionId);
    console.log("props.question", props.question);
    
    fetch(`/api/class-session/${props.sessionCode}/question/${props.question.id}/upvote`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({ question: e.target.question.value, name: e.target.name.value }) 

    }).then(response => {
      if (response.ok) { // equals response.statuescode === 200
        console.log('Got back ok response')
        props.onQuestionUpvoted()
      } else {
        console.log('UpvoteQuestion went wrong')
      }
    })
  };

  return (
    <div
      style={{
        borderTop: "1px solid darkgrey",
        paddingTop: "15px",
        paddingBottom: "15px",
        display: "flex",
      }}
    >
      <div>
        <button
          className="button"
          onClick={() => handleUpvote(props.question.id)}
        >
          <i className="material-icons">recommend</i>
        </button>
      </div>
      <div style={{ marginLeft: "15px" }}>
        {props.question.question}
        <br />
        by {props.question.name}{" "}
        {props.question.upvotes ? `Votes: (${props.question.upvotes})` : ""}
      </div>
      {props.isSignedIn && (
        <div style={{ marginLeft: "auto" }}>
          <button className="button is-danger">Dismiss</button>
        </div>
      )}
    </div>
  );
};

export default ShowQuestion;
