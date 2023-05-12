/**
 * CS-5356-TODO
 * Logged in users can click a button to generate a new
 * session code.
 *
 * When a user clicks the button, send a request to
 * POST /api/class/:classId/session-code. If it returns
 * successfully, call the `props.onCodeGenerated` callback
 * to tell the parent component to refresh the view
 */
const GenerateNewCode = props => {

  const onGenerateClicked = () => {
    fetch(`/api/class/${props.classId}/session-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({ name: event.target.name.value })

    })
    
    .then(response => {
      if (response.ok) { // equals response.statuescode === 200
        console.log('Got back ok response')
        props.onCodeGenerated()
      } else {
        console.log('GenerateNewCode went wrong')
      }
    })
  }

  return (
    <div className="mt-5">
      <button className="button" onClick={onGenerateClicked}>Generate New Code</button>
    </div>
  );
};

export default GenerateNewCode;
