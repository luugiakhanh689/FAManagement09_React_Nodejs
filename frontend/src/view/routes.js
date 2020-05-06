import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },
  {
    path: '/chart',
    icon: 'bar-chart',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },

    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: 'user-add',
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: 'file-search',
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'setting',
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/class-room',
    loader: () =>
      import('view/classRoom/list/ClassRoomListPage'),
    permissionRequired: permissions.classRoomRead,
    exact: true,
    icon: 'file-protect',
    label: i18n('entities.classRoom.menu'),
    menu: true,
  },
  {
    path: '/class-room/new',
    loader: () =>
      import('view/classRoom/form/ClassRoomFormPage'),
    menu: false,
    permissionRequired: permissions.classRoomCreate,
    exact: true,
  },
  {
    path: '/class-room/importer',
    loader: () =>
      import(
        'view/classRoom/importer/ClassRoomImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.classRoomImport,
    exact: true,
  },
  {
    path: '/class-room/:id/edit',
    loader: () =>
      import('view/classRoom/form/ClassRoomFormPage'),
    menu: false,
    permissionRequired: permissions.classRoomEdit,
    exact: true,
  },
  {
    path: '/class-room/:id',
    loader: () =>
      import('view/classRoom/view/ClassRoomViewPage'),
    menu: false,
    permissionRequired: permissions.classRoomRead,
    exact: true,
  },

  {
    path: '/course',
    loader: () => import('view/course/list/CourseListPage'),
    permissionRequired: permissions.courseRead,
    exact: true,
    icon: 'laptop',
    label: i18n('entities.course.menu'),
    menu: true,
  },
  {
    path: '/course/new',
    loader: () => import('view/course/form/CourseFormPage'),
    menu: false,
    permissionRequired: permissions.courseCreate,
    exact: true,
  },
  {
    path: '/course/importer',
    loader: () =>
      import('view/course/importer/CourseImporterPage'),
    menu: false,
    permissionRequired: permissions.courseImport,
    exact: true,
  },
  {
    path: '/course/:id/edit',
    loader: () => import('view/course/form/CourseFormPage'),
    menu: false,
    permissionRequired: permissions.courseEdit,
    exact: true,
  },
  {
    path: '/course/:id',
    loader: () => import('view/course/view/CourseViewPage'),
    menu: false,
    permissionRequired: permissions.courseRead,
    exact: true,
  },

  {
    path: '/assigment',
    loader: () =>
      import('view/assigment/list/AssigmentListPage'),
    permissionRequired: permissions.assigmentRead,
    exact: true,
    icon: 'carry-out',
    label: i18n('entities.assigment.menu'),
    menu: true,
  },
  {
    path: '/assigment/new',
    loader: () =>
      import('view/assigment/form/AssigmentFormPage'),
    menu: false,
    permissionRequired: permissions.assigmentCreate,
    exact: true,
  },
  {
    path: '/assigment/importer',
    loader: () =>
      import(
        'view/assigment/importer/AssigmentImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.assigmentImport,
    exact: true,
  },
  {
    path: '/assigment/:id/edit',
    loader: () =>
      import('view/assigment/form/AssigmentFormPage'),
    menu: false,
    permissionRequired: permissions.assigmentEdit,
    exact: true,
  },
  {
    path: '/assigment/:id',
    loader: () =>
      import('view/assigment/view/AssigmentViewPage'),
    menu: false,
    permissionRequired: permissions.assigmentRead,
    exact: true,
  },

  {
    path: '/topic',
    loader: () => import('view/topic/list/TopicListPage'),
    permissionRequired: permissions.topicRead,
    exact: true,
    icon: 'read',
    label: i18n('entities.topic.menu'),
    menu: true,
  },
  {
    path: '/topic/new',
    loader: () => import('view/topic/form/TopicFormPage'),
    menu: false,
    permissionRequired: permissions.topicCreate,
    exact: true,
  },
  {
    path: '/topic/importer',
    loader: () =>
      import('view/topic/importer/TopicImporterPage'),
    menu: false,
    permissionRequired: permissions.topicImport,
    exact: true,
  },
  {
    path: '/topic/:id/edit',
    loader: () => import('view/topic/form/TopicFormPage'),
    menu: false,
    permissionRequired: permissions.topicEdit,
    exact: true,
  },
  {
    path: '/topic/:id',
    loader: () => import('view/topic/view/TopicViewPage'),
    menu: false,
    permissionRequired: permissions.topicRead,
    exact: true,
  },

  {
    path: '/evaluation',
    loader: () =>
      import('view/evaluation/list/EvaluationListPage'),
    permissionRequired: permissions.evaluationRead,
    exact: true,
    icon: 'form',
    label: i18n('entities.evaluation.menu'),
    menu: true,
  },
  {
    path: '/evaluation/new',
    loader: () =>
      import('view/evaluation/form/EvaluationFormPage'),
    menu: false,
    permissionRequired: permissions.evaluationCreate,
    exact: true,
  },
  {
    path: '/evaluation/importer',
    loader: () =>
      import(
        'view/evaluation/importer/EvaluationImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.evaluationImport,
    exact: true,
  },
  {
    path: '/evaluation/:id/edit',
    loader: () =>
      import('view/evaluation/form/EvaluationFormPage'),
    menu: false,
    permissionRequired: permissions.evaluationEdit,
    exact: true,
  },
  {
    path: '/evaluation/:id',
    loader: () =>
      import('view/evaluation/view/EvaluationViewPage'),
    menu: false,
    permissionRequired: permissions.evaluationRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
