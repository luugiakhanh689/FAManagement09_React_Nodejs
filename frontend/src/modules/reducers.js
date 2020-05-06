import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import classRoom from 'modules/classRoom/classRoomReducers';
import course from 'modules/course/courseReducers';
import assigment from 'modules/assigment/assigmentReducers';
import topic from 'modules/topic/topicReducers';
import evaluation from 'modules/evaluation/evaluationReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    classRoom,
    course,
    assigment,
    topic,
    evaluation,
  });
