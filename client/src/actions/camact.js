export const RECEIVE_CAMLIST_BEGIN = "@camact/RECEIVE_CAMLIST_BEGIN";
export const RECEIVE_CAMLIST_SUCCESS = "@camact/RECEIVE_CAMLIST_SUCCESS";
export const RECEIVE_CAMLIST_FAILURE = "@camact/RECEIVE_CAMLIST_FAILURE";

// Action

export const fetchCamBegin = () => ({
  type: RECEIVE_CAMLIST_BEGIN
});

export const fetchCamSuccess = camlist => ({
  type: RECEIVE_CAMLIST_SUCCESS,
  payload: { camlist }
});

export const fetchCamsError = error => ({
  type: RECEIVE_CAMLIST_FAILURE,
  payload: { error }
});

export const fetchCamlist = () => {
  return dispatch => {
    dispatch(fetchCamBegin());
    return fetch("/camlist.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCamSuccess(json.camlist));
        console.log(json.camlist);
        return json.camlist;
      })
      .catch(error => dispatch(fetchCamsError(error)));
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
