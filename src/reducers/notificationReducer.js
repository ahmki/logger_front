const initial = {
  message: '',
  display: false
};

const notificationReducer = (state = initial, action) => {
  switch(action.type) {
  case('NOTIFY'): {
    return {
      message: action.notification.message,
      class: action.notification.class,
      display: true
    };
  }
  case('HIDE_NOTIFICATION'): {
    return initial;
  }
  default: return state;
  }
};

export const displayNotification = (notification, sec) => {
  return dispatch => {
    dispatch({
      type: 'NOTIFY',
      notification
    });

    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      });
    }, sec * 1000);
  };
};

export default notificationReducer;