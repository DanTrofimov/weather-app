export const handleError = (updateError) => (err) => {
  if (err.response) {
    console.error("Oh, we get an error response (5xx, 4xx)");
    updateError(err.response.data.message);
  } else if (err.request) {
    console.error("Some troubles with a network, pls check your connection");
  } else {
    console.error("Something went wrong, pls refresh the page");
  }
};
