/**
 * CS-5356-TODO
 * Create a question for a class session
 *
 * A user can provide the content of their question,
 * and their name. When they submit the form, make a
 * POST /api/class-session/:session-code/question
 * with the value of their inputs in the body of
 * the request.
 *
 * If it is successful, call `props.onQuestionCreated()`
 * to tell the parent component to refresh the view
 */
const CreateQuestion = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("[CS5356] on create question form submitted");

    fetch(`/api/class-session/${props.sessionCode}/question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: e.target.question.value, name: e.target.name.value }) //TODO

    }).then(response => {
      if (response.ok) { // equals response.statuescode === 200
        console.log('Got back ok response')
        props.onQuestionCreated()
      } else {
        console.log('CreateQuestion went wrong')
      }
    })
  };

  return (
    <>
      <div className="has-text-centered">
        <h1 className="title">Ask a Question</h1>
      </div>
      <form
        className="is-flex is-flex-direction-column is-align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="field" style={{ width: "50%" }}>
          <label className="label" htmlFor="question">
            Type your question
          </label>
          <div className="control">
            {/* Add an input for the user to type in text */}
            <input name="question" className="input" />
          </div>
        </div>
        <div className="field" style={{ width: "50%" }}>
          <label className="label" htmlFor="name">
            Name (optional)
          </label>
          {/* Add an input for the user's name */}
          <input name="name" className="input" />
        </div>

        <div className="field">
          <div className="control">
            {/* Add an input to submit the form  */}
          </div>
          <div> 
            <input type="submit" className="button is-primary"/>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateQuestion;
