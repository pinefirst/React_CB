import cookie from 'react-cookie';

export const API_URL = 'http://localhost:9003/api';
export const CLIENT_ROOT_URL = 'http://localhost:3001';
export const  Content_URL = 'https://ggconnectapi.herokuapp.com/contentful';

export const AUTH_USER = 'auth_user',
  UNAUTH_USER = 'unauth_user',
  AUTH_ERROR = 'auth_error',
  FORGOT_PASSWORD_REQUEST = 'forgot_password_request',
  RESET_PASSWORD_REQUEST = 'reset_password_request',
  PROTECTED_TEST = 'protected_test';

export const FETCH_USER = 'fetch_user',
  ERROR_RESPONSE = 'error_response';

export const FETCH_CONVERSATIONS = 'fetch_conversations',
  FETCH_RECIPIENTS = 'fetch_recipients',
  START_CONVERSATION = 'start_conversation',
  FETCH_SINGLE_CONVERSATION = 'fetch_single_conversation',
  CHAT_ERROR = 'chat_error',
  SEND_REPLY = 'send_reply';


export const FETCH_FEEDBACK = 'fetch_feedback',
  FETCH_FEEDBACK_LOADER = 'fetch_feedback_loader',
  FETCH_SINGLE_FEEDBACK = 'fetch_single_feedback',
  FEEDBACK_ERROR = 'feedback_error',
  FEEDBACK_ANALYSIS = 'feedback_analysis',
  RECENT_FEEDBACK='recent_feedback',
  FEEDBACK_REMOVAL='feedback_removal',
  FEEDBACK_ANALYSIS_LOADER = 'feedback_analysis_loader';

export const FETCH_ORDERS = 'fetch_orders',
  FETCH_ORDERS_LOADER = 'fetch_orders_loader',
  FETCH_SINGLE_ORDER = 'fetch_single_order',
  ORDER_ERROR = 'order_error',
  ORDER_ANALYSIS = 'order_analysis',
  ORDER_EMAIL_SENT= 'order_email_sent',
  ORDER_ANALYSIS_LOADER = 'order_analysis_loader';

export const FETCH_PRODUCTS = 'fetch_products',
  FETCH_PRODUCTS_LOADER = 'fetch_products_loader',
  FETCH_SINGLE_PRODUCT = 'fetch_single_product',
  TOP_TEN_PRODUCT='top_ten_product',
  PRODUCT_ERROR = 'order_error';

export const FETCH_DASHBOARD = 'fetch_dashboard',
  DASHBOARD_ERROR = 'dashboard_error';



export const FETCH_TEMPLATES = 'fetch_templates',
  FETCH_TEMPLATES_LOADER = 'fetch_templates_loader',
  TEMPLATE_STATUS_TOGGLE_LOADER = 'template_status_toggle_loader',
  DELETE_TEMPLATE = 'delete_template',
  FETCH_EMAIL_UNSUBSCRIBE_ANALYSIS = 'fetch_email_unsubscribe_analysis',
  FETCH_EMAIL_UNSUBSCRIBE_ANALYSIS_LOADER = 'fetch_email_unsubscribe_analysis_loader',
  FETCH_SINGLE_TEMPLATE = 'fetch_single_template',
  FETCH_SINGLE_TEMPLATE_ANALYSIS = 'fetch_single_template_analysis',
  FETCH_SINGLE_TEMPLATE_ANALYSIS_LOADER = 'fetch_single_template_analysis_loader',
  TEMPLATE_ERROR = 'template_error';

export const FETCH_CAMPAIGNS = 'fetch_campaigns',
  DELETE_CAMPAIGN = 'delete_campaign',
  FETCH_SINGLE_CAMPAIGN = 'fetch_single_campaign',
  CAMPAIGN_ERROR = 'campaign_error';

export const SEND_MAIL = 'send_mail',
  MAIL_ERROR = 'mail_error';

export const FETCH_PROFILE = 'fetch_profile',
  UPDATE_PROFILE = 'update_profile',
  PROFILE_ERROR = 'profile_error';

//= =====================
// Page Actions
//= =====================
export const SEND_CONTACT_FORM = 'send_contact_form',
  STATIC_ERROR = 'static_error';


//= =====================
// Dashboard Type
//= =====================
export const FETCH_DASHBOARD_DATA_SUMMARY = 'fetch_dashboard_data_summary',
  FETCH_DASHBOARD_DATA_SUMMARY_LOADER = 'fetch_dashboard_data_summary_loader';


//DB Browser===============
//Friends
export const FETCH_FRIENDS = 'fetch_browser_friends',
  DELETE_FRIEND = 'delete_browser_friend',
  UPDATE_FRIEND = 'update_browser_friend',
  CREATE_FRIEND = 'create_browser_friend';
//Consoles
export const FETCH_CONSOLES = 'fetch_browser_consoles',
  DELETE_CONSOLE = 'delete_browser_console',
  UPDATE_CONSOLE = 'update_browser_console',
  CREATE_CONSOLE = 'create_browser_console';
//Messages
export const FETCH_MESSAGES = 'fetch_browser_messages',
  DELETE_MESSAGE = 'delete_browser_message',
  UPDATE_MESSAGE = 'update_browser_message',
  CREATE_MESSAGE = 'create_browser_message';
//FriendRequests
export const FETCH_FRIENDREQUESTS = 'fetch_browser_friendrequests',
  DELETE_FRIENDREQUESTS = 'delete_browser_friendrequests',
  UPDATE_FRIENDREQUESTS = 'update_browser_friendrequests',
  CREATE_FRIENDREQUESTS = 'create_browser_friendrequests';
//Chats
export const FETCH_CHATS = 'fetch_browser_chats',
  DELETE_CHAT = 'delete_browser_chats',
  UPDATE_CHAT = 'update_browser_chats',
  CREATE_CHAT = 'create_browser_chats';
//Users
export const FETCH_USERS = 'fetch_browser_users',
  DELETE_USER = 'delete_browser_user',
  UPDATE_USER = 'update_browser_user',
  CREATE_USER = 'create_browser_user';

//Games
export const FETCH_GAMES = 'fetch_browser_games',
  DELETE_GAME = 'delete_browser_game',
  UPDATE_GAME = 'update_browser_game',
  CREATE_GAME = 'create_browser_game';

/////////////////////////

//= =====================
// Customer Actions
//= =====================
export const CREATE_CUSTOMER = 'create_customer',
  FETCH_CUSTOMER = 'fetch_customer',
  FETCH_CUSTOMERS = 'fetch_customers',
  FETCH_CUSTOMERS_LOADER = 'fetch_customers_loader',
  CUSTOMERS_ERROR = 'customers_error',
  CANCEL_SUBSCRIPTION = 'cancel_subscription',
  UPDATE_BILLING = 'update_billing',
  BILLING_ERROR = 'billing_error',
  CHANGE_SUBSCRIPTION = 'change_subscription';

export function logoutUser(error) {
  return function (dispatch) {
    dispatch({type:UNAUTH_USER, payload:error || ''});
    cookie.remove('token', {path:'/'});
    cookie.remove('user', {path: '/'});

    window.location.href = `${CLIENT_ROOT_URL}/login`;
  }
}


export function errorHandler(dispatch, error, type) {
  console.log('Error type :', type);
  console.log(error);

  let errorMessage = error.response ? error.response.data:error;
  if (error.status === 401 || error.response.status === 401){
    errorMessage = 'You are not authorized to do this';
    return dispatch(logoutUser(errorMessage));
  }

  dispatch({
    type,
    payload: errorMessage,
  });
}
